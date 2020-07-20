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
  templateId: string;
  pageNumber: number;
  reportID: string;
  metaObj: Object;
  pageCount: 5;
  pages: [];

  report: Report;
  datagrids: DatagridSection[] = [];
  simpleInputs: SimpleInputSection[] = [];
  startPage: SimpleInputSection;

  markCompleteControl = new FormControl();
  pageCompletions: boolean[] = [];
  submitButtonState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(
    private activeRoute: ActivatedRoute,
    private _Router: Router,
    public _ReportService: ReportService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      // this.templateId = params.get('template-id');
      // this.pageNumber = +params.get('page-number');
      // this.reportID = params.get('report-id');
      // //catch incomplete path, create a fresh report
      // if (this.reportID === null) {
      //   this._ReportService.openReport(this.templateId).then(()=>{
      //     this._ReportService.getReportObservable().subscribe((report)=> {
      //       if(report){
      //         this._Router.navigate(['report', this.templateId, report.id, 0]);
      //       }
      //     })
      //   }
      // }
      // if (!ReportService.reportOpened) {
      //   console.warn('Report not loaded. Loading ' + this.reportID + ' now.');
      //   this._ReportService.openReport(this.templateId, this.reportID);
      // }
      // this.startPage = new SimpleInputSection();
      // ReportService.reportObservable.subscribe((observer) => {
      //   this.report = observer;
      //   if (observer) {
      //     let metaSection = this.report.metaSection as SimpleInputInterface;
      //     this.startPage.title = metaSection.title;
      //     this.startPage.subtitle = metaSection.subtitle || null;
      //     this.startPage.interface = metaSection;
      //     this.report.pageStatuses = observer.pageStatuses || null;
      //     //set initial value of completion toggle (bottom corner)
      //     if (this.report.pageStatuses[this.pageNumber - 1] === 'complete') {
      //       this.markCompleteControl.setValue(true);
      //     } else this.markCompleteControl.setValue(false);
      //     this.datagrids.length = 0;
      //     this.simpleInputs.length = 0;
      //     //the start page exists outside 'pages[]' so we have to check
      //     if (observer.pages[this.pageNumber - 1]) {
      //       observer.pages[this.pageNumber - 1]['sections'].forEach(
      //         (sectionInterface, index) => {
      //           if (sectionInterface.type === 'datagrid') {
      //             let dg = new DatagridSection();
      //             dg.interface = sectionInterface as DatagridInterface;
      //             dg.order = index;
      //             this.datagrids.push(dg);
      //           } else if (sectionInterface.type === 'simple-input') {
      //             let si = new SimpleInputSection();
      //             si.interface = sectionInterface as SimpleInputInterface;
      //             si.order = index;
      //             this.simpleInputs.push(si);
      //           }
      //         }
      //       );
      //     }
      //   //   }
      //   });
      //   //update the page status as the toggle changes
      //   this.markCompleteControl.valueChanges.subscribe((value) => {
      //     if (value === true) {
      //       this.report.pageStatuses[this.pageNumber - 1] = 'complete';
      //       ReportService.setPageStatus(this.pageNumber - 1, 'complete');
      //       this.updatePageCompletions();
      //     } else {
      //       this.report.pageStatuses[this.pageNumber - 1] = 'incomplete';
      //       ReportService.setPageStatus(this.pageNumber - 1, 'incomplete');
      //       this.updatePageCompletions();
      //     }
      //   });
      //   this.updatePageCompletions();
      // });
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
    if (this.report) {
      this.report.pageStatuses.forEach((elem) => {
        //if one page is incomplete, the whole report is too!
        if (elem !== 'complete') {
          fullyComplete = false;
        }
      });
    }
    return fullyComplete;
  }

  get isStartPage() {
    return this.pageNumber === 0;
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
    console.warn('fixme');
    //ReportService.closeReport();
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
    setTimeout(() => {
      console.log('Submitted foolishly!');
      this.submitButtonState = ClrLoadingState.SUCCESS;
    }, 3000);
  }
}
