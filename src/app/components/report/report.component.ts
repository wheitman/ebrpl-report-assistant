import { TemplateService } from './../../services/template.service';
import {
  SectionInterface,
  DatagridInterface,
  SimpleInputInterface,
} from './../../interfaces/sections';
import { FormControl } from '@angular/forms';
import { ResponseService } from './../../services/response.service';
import { DatagridSection } from './../sections/datagrid-section/datagrid-section.component';
import { AbstractSection } from './../sections/abstract-section/abstract-section.component';
import { Observable, of } from 'rxjs';
import { Page } from './../../interfaces/page';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SimpleInputSection } from '../sections/simple-input/simple-input.component';
import { ClrTimelineStepState } from '@clr/angular';
import { ThrowStmt } from '@angular/compiler';
import { Report } from 'src/app/interfaces/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit, OnDestroy {
  templateId: string;
  pageNumber: number;
  reportID: string;
  metaObj: Object;

  page$: Observable<Page>;
  report: Report;
  pageCount: number = 0;
  pageTitles: String[] = [];
  pageSubtitles: String[] = [];
  datagrids: DatagridSection[] = [];
  simpleInputs: SimpleInputSection[] = [];
  startPage$: Observable<SimpleInputSection>;

  markCompleteControl = new FormControl();
  pageCompletions: boolean[] = [];

  constructor(
    private _TemplateService: TemplateService,
    private _ResponseService: ResponseService,
    private activeRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.templateId = params.get('template-id');
      this.pageNumber = +params.get('page-number');
      this.reportID = params.get('report-id');

      //catch incomplete path, create a fresh report
      if (this.reportID === null) {
        ResponseService.openReport(this.templateId).subscribe((observer) => {
          if (observer)
            this._Router.navigate(['report', this.templateId, observer.id, 0]);
        });
      }

      this.pageCount = this._TemplateService.pageCount;
      this.page$ = this._TemplateService.getTemplatePage(this.pageNumber);
      this.pageTitles = this._TemplateService.getPageTitles();
      this.pageSubtitles = this._TemplateService.getPageSubtitles();

      this.startPage$ = this._TemplateService.getStart();

      if (!ResponseService.reportOpened) {
        console.warn('Report not loaded. Loading ' + this.reportID + ' now.');
        ResponseService.openReport(this.templateId, this.reportID);
      }
      ResponseService.reportObservable.subscribe((observer) => {
        this.report = observer;
        if (observer) {
          this.report.pageStatuses = observer.pageStatuses || null;

          //set initial value of completion toggle (bottom corner)
          if (this.report.pageStatuses[this.pageNumber - 1] === 'complete') {
            this.markCompleteControl.setValue(true);
          } else this.markCompleteControl.setValue(false);

          this.datagrids.length = 0;
          this.simpleInputs.length = 0;
          observer.pages[this.pageNumber - 1]['sections'].forEach(
            (sectionInterface, index) => {
              if (sectionInterface.type === 'datagrid') {
                let dg = new DatagridSection();
                dg.interface = sectionInterface as DatagridInterface;
                dg.order = index;
                this.datagrids.push(dg);
              } else if (sectionInterface.type === 'simple-input') {
                let si = new SimpleInputSection();
                si.interface = sectionInterface as SimpleInputInterface;
                si.order = index;
                this.simpleInputs.push(si);
              }
            }
          );
        }
      });

      //update the page status as the toggle changes
      this.markCompleteControl.valueChanges.subscribe((value) => {
        if (value === true) {
          this.report.pageStatuses[this.pageNumber - 1] = 'complete';
          ResponseService.setPageStatus(this.pageNumber - 1, 'complete');
          this.updatePageCompletions();
        } else {
          this.report.pageStatuses[this.pageNumber - 1] = 'incomplete';
          ResponseService.setPageStatus(this.pageNumber - 1, 'incomplete');
          this.updatePageCompletions();
        }
      });
      this.updatePageCompletions();
    });
  }

  get currentPageComplete(): boolean {
    if (
      this.report &&
      this.report.pageStatuses[this.pageNumber] === 'complete'
    ) {
      return true;
    } else return false;
  }

  getPageButtonClass(pageNumber: number) {
    if (pageNumber == this.pageNumber) return 'btn btn-primary';
    else return 'btn';
  }
  pageCompleted(pageNumber: number) {
    if (this.report.pageStatuses[this.pageNumber] === 'complete') return true;
    else return false;
  }
  updatePageCompletions() {
    this.pageCompletions = [];
    this.report.pageStatuses.forEach((status, index) => {
      if (status === 'complete') {
        this.pageCompletions.push(true);
      } else {
        this.pageCompletions.push(false);
      }
    });
  }

  get reportFullyComplete() {
    let fullyComplete = true;
    this.pageCompletions.forEach((elem) => {
      //if one page is incomplete, the whole report is too!
      if (elem === false) fullyComplete = false;
    });
    return fullyComplete;
  }

  get isStartPage() {
    return this.pageNumber === 0;
  }

  setMetaObj(formData: Object) {
    this.report.metaSection['inputs'].forEach((inputObj, index) => {
      inputObj['value'] = formData[index];
    });
    this.metaObj = formData;
  }
  finishStartPage() {
    ResponseService.parseMetaObject(this.report.metaSection);
    this._Router.navigate([
      'report',
      this.templateId,
      this.reportID,
      this.pageNumber + 1,
    ]);
  }

  updateSection(sectionIndex: number, sectionObject: SectionInterface) {
    ResponseService.setSection(
      this.pageNumber - 1,
      sectionIndex,
      sectionObject
    );
  }

  getConstants() {
    return TemplateService.getConstants();
  }

  ngOnDestroy() {
    ResponseService.closeReport();
  }
}
