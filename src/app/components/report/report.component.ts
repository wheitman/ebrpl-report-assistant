import {
  SectionInterface,
  DatagridInterface,
  SimpleInputInterface,
} from './../../interfaces/sections';
import { FormControl } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { DatagridSection } from './../sections/datagrid-section/datagrid-section.component';
import { AbstractSection } from './../sections/abstract-section/abstract-section.component';
import { Observable, of } from 'rxjs';
import { Page } from './../../interfaces/page';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SimpleInputSection } from '../sections/simple-input/simple-input.component';
import { ClrTimelineStepState, ClrLoadingState } from '@clr/angular';
import { ThrowStmt } from '@angular/compiler';
import { Report } from 'src/app/interfaces/report';
import { report } from 'process';
import { columnStateFactory } from '@clr/angular/data/datagrid/providers/column-state.provider';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit, OnDestroy {
  report$: Observable<Report>;
  page$: Observable<Page>;

  datagrids: DatagridSection[] = [];
  simpleInputs: SimpleInputSection[] = [];
  startPage: SimpleInputSection;

  markCompleteControl = new FormControl();
  submitButtonState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(
    private activeRoute: ActivatedRoute,
    private _Router: Router,
    public _ReportService: ReportService
  ) {}

  ngOnInit(): void {
    this.report$ = this._ReportService.getReportObservable();
    this.page$ = this._ReportService.getPageObservable();
    // if (!this._ReportService.report) {
    //   this._Router.navigate(['']);
    // }
    this.report$.subscribe((report) => {
      if (!report) {
        let reportID = this.activeRoute.snapshot.paramMap.get('report-id');
        console.warn('Report ' + reportID + ' not open. Opening now...');
        this._ReportService.openReport(reportID);
      } else console.log(report);
    });
    this.page$.subscribe((page) => {
      console.log(page);
    });
  }

  getPageButtonClass(pageNumber: number) {
    if (pageNumber == this.currentPage) return 'btn btn-primary';
    else return 'btn';
  }
  pageComplete(pageIndex: number): boolean {
    if (!this._ReportService.report) return false;
    return this._ReportService.report.pageStatuses[pageIndex] === 'complete'
      ? true
      : false;
  }

  get reportFullyComplete() {
    let fullyComplete = true;
    if (this._ReportService.report) {
      this._ReportService.report.pageStatuses.forEach((elem) => {
        //if one page is incomplete, the whole report is too!
        if (elem !== 'complete') {
          fullyComplete = false;
        }
      });
    }
    return fullyComplete;
  }

  // setMetaObj(formInterface: SimpleInputInterface) {
  //   this.report.metaSection['inputs'].forEach((inputObj, index) => {
  //     inputObj['value'] = formInterface.data[index];
  //   });
  //   this.metaObj = formInterface.data;
  // }
  // finishStartPage() {
  //   ReportService.parseMetaObject(this.report.metaSection);
  //   this._Router.navigate([
  //     'report',
  //     this.templateId,
  //     this.reportID,
  //     this.pageNumber + 1,
  //   ]);
  // }

  // updateSection(sectionIndex: number, sectionObject: SectionInterface) {
  //   ReportService.setSection(this.pageNumber - 1, sectionIndex, sectionObject);
  // }

  ngOnDestroy() {
    this._ReportService.closeReport();
  }

  // get pageTitle() {
  //   if (this.report) return this.report.pages[this.pageNumber - 1]['title'];
  //   else return '';
  // }
  // get pageCount() {
  //   if (this.report) {
  //     return this.report.pages.length;
  //   } else return 0;
  // }

  submitReport() {
    console.log('[R Comp] Submitting report...');
    this.submitButtonState = ClrLoadingState.LOADING;
    this._ReportService.submitReport().then(() => {
      this.submitButtonState = ClrLoadingState.SUCCESS;
    });
  }

  get currentPage() {
    if (this._ReportService.page) return this._ReportService.page.number;
    else return 0;
  }
}
