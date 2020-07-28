import { UserService } from 'src/app/services/user.service';
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

  urlPageNumber: number;

  datagrids: DatagridInterface[] = [];
  simpleInputs: SimpleInputInterface[] = [];
  startPage: SimpleInputSection;

  markCompleteControl = new FormControl();
  submitButtonState: ClrLoadingState = ClrLoadingState.DEFAULT;
  saveButtonState: ClrLoadingState = ClrLoadingState.DEFAULT;
  saveSuccessful: boolean = false;
  saveTime: number;

  submitConfirmationVisible: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private _Router: Router,
    public _ReportService: ReportService,
    private _UserService: UserService
  ) {}

  ngOnInit(): void {
    this.report$ = this._ReportService.getReportObservable();
    this.page$ = this._ReportService.getPageObservable();

    this.activeRoute.paramMap.subscribe((params) => {
      this.urlPageNumber = +params.get('page-number');
      if (
        this.urlPageNumber !== null &&
        this.urlPageNumber !== undefined &&
        this.urlPageNumber !== this.currentPageIndex &&
        this._ReportService.report
      ) {
        this._ReportService.openPage(this.urlPageNumber);
      }
    });

    this.markCompleteControl.valueChanges.subscribe((newState: boolean) => {
      if (newState === true) {
        this._ReportService.setPageStatus(this.currentPageIndex, 'complete');
      } else {
        this._ReportService.setPageStatus(this.currentPageIndex, 'incomplete');
      }
      this._ReportService.saveReportOnline();
    });

    this.report$.subscribe((report) => {
      if (!report) {
        let reportID = this.activeRoute.snapshot.paramMap.get('report-id');
        let pageNumber = this.activeRoute.snapshot.paramMap.get('page-number');
        this._ReportService.openReport(reportID, +pageNumber);
      }
    });
    //if requested page isn't open, open it

    this.page$.subscribe((page) => {
      if (page) {
        this.datagrids = [];
        this.simpleInputs = [];
        //process new sections
        page.sections.forEach((section) => {
          if (section['type'] == 'datagrid') {
            this.datagrids.push(section as DatagridInterface);
          } else if (
            section['type'] === 'simple-input' ||
            section['type'] === 'meta'
          ) {
            this.simpleInputs.push(section as SimpleInputInterface);
          }
        });
        this.markCompleteControl.setValue(
          this._ReportService.report.pageStatuses[page.index] === 'complete'
            ? true
            : false
        );
      }
    });
  }

  getPageButtonClass(pageIndex: number) {
    if (pageIndex == this.currentPageIndex) return 'btn btn-primary';
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

  ngOnDestroy() {
    this._ReportService.closeReport();
  }

  savePage() {
    this.saveButtonState = ClrLoadingState.LOADING;

    //save report properties if a meta section is present
    this._ReportService.page.sections.forEach((section) => {
      if (section['type'] === 'meta') {
        this._ReportService.saveReportOnline();
      }
    });
    this._ReportService
      .savePageOnline()
      .then(() => {
        this.saveButtonState = ClrLoadingState.DEFAULT;
        this.saveSuccessful = true;
        this.saveTime = Date.now();
        setTimeout(() => (this.saveSuccessful = false), 2500);
      })
      .catch(() => {
        this.saveButtonState = ClrLoadingState.ERROR;
      });
  }

  goToPage(pageNumber: number) {
    //no point saving a page if it hasn't been edited
    if (this.editable) this.savePage();
    this._Router.navigate([
      'report',
      this._ReportService.report.id,
      pageNumber,
    ]);
  }

  confirmSubmitReport() {
    this.submitConfirmationVisible = true;
  }

  cancelSubmitReport() {
    this.submitConfirmationVisible = false;
  }

  submitReport() {
    console.log('[R Comp] Submitting report...');
    this.submitButtonState = ClrLoadingState.LOADING;
    this._ReportService.submitReport().then(() => {
      this.submitButtonState = ClrLoadingState.SUCCESS;
      this._Router.navigate(['']);
    });
  }

  get currentPageIndex() {
    if (this._ReportService.page) {
      return this._ReportService.page.index;
    } else return null;
  }

  //return minutes since last save
  get saveTimeElapsed(): string {
    if (!this.saveTime) {
      return null;
    } else {
      return (
        ((Date.now() - this.saveTime) / (1000 * 60)).toFixed() +
        ' min since save'
      );
    }
  }

  get saveStale(): boolean {
    //if unsaved or ten minutes have passed
    if (!this.saveTime || (Date.now() - this.saveTime) / (1000 * 60) > 10) {
      return true;
    } else return false;
  }

  setSection(section, eventData) {
    this._ReportService.setSectionValue(
      this.currentPageIndex,
      section.order,
      eventData
    );
    //sections interact with Report properties directly,
    //but it's up to the ReportComponent to save the changes
    //to the database afterwards.
    if (section['meta']) {
      this._ReportService.saveReportOnline();
    }
  }

  get editable(): boolean {
    //if the report's been submitted and the user isn't an admin,
    //make the report uneditable
    if (
      this._ReportService.report &&
      this._UserService.getUserSnapshot().role !== 'admin' &&
      this._ReportService.report.completionStatus === 'complete'
    ) {
      return false;
    } else {
      return true;
    }
  }
  get adminSubmitted(): boolean {
    if (
      this._UserService.getUserSnapshot() &&
      this._UserService.getUserSnapshot().role === 'admin' &&
      this._ReportService.report &&
      this._ReportService.report.completionStatus === 'complete'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
