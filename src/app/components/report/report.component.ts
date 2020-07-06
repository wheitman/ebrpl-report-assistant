import { FormControl } from '@angular/forms';
import { ResponseService } from './../../services/response.service';
import { DatagridSection } from './../sections/datagrid-section/datagrid-section.component';
import { AbstractSection } from './../sections/abstract-section/abstract-section.component';
import { Observable, of } from 'rxjs';
import { TemplateService } from '../../services/template.service';
import { Page } from './../../interfaces/page';

import {
  Component,
  OnInit,
  ɵangular_packages_core_core_bj,
} from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SimpleInputSection } from '../sections/simple-input/simple-input.component';
import { ClrTimelineStepState } from '@clr/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  templateId: string;
  pageNumber: number;
  page$: Observable<Page>;
  pageCount: number = 0;
  pageTitles: String[] = [];
  pageSubtitles: String[] = [];
  datagrids$: Observable<DatagridSection[]>;
  simpleInputs$: Observable<SimpleInputSection[]>;
  startPage$: Observable<SimpleInputSection>;

  markCompleteControl = new FormControl();
  pageStatuses: string[];
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
      this.pageCount = this._TemplateService.pageCount;
      this.page$ = this._TemplateService.getTemplatePage(this.pageNumber);
      this.pageTitles = this._TemplateService.getPageTitles();
      this.pageSubtitles = this._TemplateService.getPageSubtitles();
      this.datagrids$ = this._TemplateService.getDatagrids(this.pageNumber);
      this.simpleInputs$ = this._TemplateService.getSimpleInputs(
        this.pageNumber
      );

      this.startPage$ = this._TemplateService.getStart();

      //get all saved page statuses
      this.pageStatuses = this._ResponseService.getAllPageStatuses();

      //set the toggle to the current page status
      if (this.pageStatuses[this.pageNumber - 1] === 'complete') {
        this.markCompleteControl.setValue(true);
      } else this.markCompleteControl.setValue(false);

      //update the page status as the toggle changes
      this.markCompleteControl.valueChanges.subscribe((value) => {
        console.log(value);
        if (value === true) {
          this.pageStatuses[this.pageNumber - 1] = 'complete';
          this._ResponseService.setPageStatus(this.pageNumber, 'complete');
          this.updatePageCompletions();
        } else {
          this.pageStatuses[this.pageNumber - 1] = 'incomplete';
          this._ResponseService.setPageStatus(this.pageNumber, 'incomplete');
          this.updatePageCompletions();
        }
      });

      this.updatePageCompletions();
    });
  }

  get currentPageComplete(): boolean {
    if (this._ResponseService.getPageStatus(this.pageNumber) === 'complete') {
      return true;
    } else return false;
  }

  getPageButtonClass(pageNumber: number) {
    if (pageNumber == this.pageNumber) return 'btn btn-primary';
    else return 'btn';
  }
  pageCompleted(pageNumber: number) {
    if (this._ResponseService.getPageStatus(pageNumber) === 'complete')
      return true;
    else return false;
  }
  updatePageCompletions() {
    this.pageCompletions = [];
    this.pageStatuses.forEach((status, index) => {
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
}
