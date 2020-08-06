import { AngularFirestore } from '@angular/fire/firestore';
import { ConstantService } from './../../services/constant.service';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { ReportService } from 'src/app/services/report.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { TemplateService } from '../../services/template.service';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { User } from 'src/app/interfaces/user';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  detailState = false;

  //modal booleans
  editVisible: boolean = false;
  copyVisible: boolean = false;
  deleteVisible: boolean = false;
  exportVisible: boolean = false;
  filterVisible: boolean = false;

  selectedTemplateName: string;
  newTemplateName: string = '';

  //alert booleans
  emailSent: boolean = false;

  //from UserService
  user: Observable<User> = this._UserService.getUserObservable();
  showUnverifiedAlert: boolean;
  reports: Report[] = [];
  selectedReport: Report;

  templateModalVisible: boolean = false;
  tempDuplicateVisible: boolean = false;

  reportCount: number = -1;
  selectedReports: Report[] = [];

  _sizeLimit: string = '10';

  _constants: Object;

  //from TemplateService
  templates: Observable<Map<string, Report>>;

  //for the filter tool
  filterGroup: FormGroup;
  selectedTemplates: string[] = [];
  selectedBranches: string[] = [];
  allTags: Object[] = [];

  //button loading states
  templateLoadStatuses: ClrLoadingState[];
  deleteLoading: ClrLoadingState;
  filterLoading: ClrLoadingState = ClrLoadingState.DEFAULT;
  magicLoading: ClrLoadingState = ClrLoadingState.DEFAULT;
  templateDupStatus: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(
    public _TemplateService: TemplateService,
    public _ReportService: ReportService,
    private _UserService: UserService,
    private _Router: Router,
    private _clipboardService: ClipboardService,
    private fb: FormBuilder,
    private constantService: ConstantService
  ) {}

  ngOnInit(): void {
    this.user.subscribe((user) => {
      if (user) {
        this.showUnverifiedAlert = !user.emailVerified;
        if (user.role === 'admin') {
          //then load all reports, within quantity limit
          if (this._sizeLimit !== 'all') {
            this._ReportService
              .fetchAllReportsWithLimit(+this._sizeLimit)
              .then((reports) => {
                this.reports = reports;
                this.getAllTagsFromReports();
                console.log(reports);
              })
              .catch(() => {
                console.error('Could not fetch reports for ' + user.email);
              });
          } else {
            this._ReportService
              .fetchAllReports()
              .then((reports) => {
                this.reports = reports;
                this.getAllTagsFromReports();
                console.log(reports);
              })
              .catch(() => {
                console.error('Could not fetch reports for ' + user.email);
              });
          }
        } else {
          if (this._sizeLimit !== 'all') {
            this._ReportService
              .fetchReportsByBranchWithLimit(user.branch, +this._sizeLimit)
              .then((reports) => {
                this.reports = reports;
                this.getAllTagsFromReports();
                console.log(reports);
              })
              .catch(() => {
                console.error('Could not fetch reports for ' + user.email);
              });
          } else {
            this._ReportService
              .fetchReportsByBranch(user.branch)
              .then((reports) => {
                this.reports = reports;
                this.getAllTagsFromReports();
                console.log(reports);
              })
              .catch(() => {
                console.error('Could not fetch reports for ' + user.email);
              });
          }
        }

        this.getReportCount().then((count) => {
          this.reportCount = count;
        });
      }
    });
    this.templates = this._TemplateService.templateObservable;

    //attach loading statuses to the templates in the 'new report' dropdown
    this.templateLoadStatuses = [];
    this._TemplateService.templateNames.forEach(() => {
      this.templateLoadStatuses.push(ClrLoadingState.DEFAULT);
    });

    //subscribe to constants
    this.constantService.constants.subscribe((constObj) => {
      this._constants = constObj;
    });
    this.filterGroup = this.fb.group({
      idSearch: [''],
      completionStatus: ['All'],
      template: ['All'],
      authorSearch: [''],
      coverageFrom: [''],
      coverageTo: [''],
      branch: ['All'],
      tag: ['All'],
    });
  }

  get sizeLimit() {
    return this._sizeLimit;
  }

  getReportCount(): Promise<number> {
    if (this._UserService.getUserSnapshot().role === 'admin') {
      return this._ReportService.getFullReportCount();
    } else {
      return this._ReportService.getReportCountByBranch(
        this._UserService.getUserSnapshot().branch
      );
    }
  }

  getAllTagsFromReports() {
    let tags: Object[] = [];
    let tagLabels: string[] = [];
    this.reports.forEach((report) => {
      if (report.tags) {
        report.tags.forEach((tag) => {
          if (!tagLabels.includes(tag['label'])) {
            tags.push(tag);
            tagLabels.push(tag['label']);
          }
        });
      }
    });
    console.log(tags);
    this.allTags = tags;
  }

  set sizeLimit(newLimit: string) {
    this._sizeLimit = newLimit;
    let user = this._UserService.getUserSnapshot();
    this.showUnverifiedAlert = !user.emailVerified;
    if (user.role === 'admin') {
      //then load all reports, within quantity limit
      if (this._sizeLimit !== 'all') {
        this._ReportService
          .fetchAllReportsWithLimit(+this._sizeLimit)
          .then((reports) => {
            this.reports = reports;
            console.log(reports);
          })
          .catch(() => {
            console.error('Could not fetch reports for ' + user.email);
          });
      } else {
        this._ReportService
          .fetchAllReports()
          .then((reports) => {
            this.reports = reports;
            console.log(reports);
          })
          .catch(() => {
            console.error('Could not fetch reports for ' + user.email);
          });
      }
    } else {
      if (this._sizeLimit !== 'all') {
        this._ReportService
          .fetchReportsByBranchWithLimit(user.branch, +this._sizeLimit)
          .then((reports) => {
            this.reports = reports;
            console.log(reports);
          })
          .catch(() => {
            console.error('Could not fetch reports for ' + user.email);
          });
      } else {
        this._ReportService
          .fetchReportsByBranch(user.branch)
          .then((reports) => {
            this.reports = reports;
            console.log(reports);
          })
          .catch(() => {
            console.error('Could not fetch reports for ' + user.email);
          });
      }
    }
  }

  showExport(report: Report) {
    this.selectedReport = report;
    this.exportVisible = true;
  }
  hideExport() {
    this.exportVisible = false;
  }

  isHidden(templateID: string) {
    let templates = this._TemplateService.templateSnapshot;
    if (templates && templates.get(templateID)) {
      return templates.get(templateID).hidden;
    } else return false;
  }

  duplicateReport(report: Report) {
    console.log(report.id);
    this._ReportService.duplicateReport(report.id).then(
      (newID) => {
        this._ReportService
          .openReport(newID)
          .then(() => {
            this._Router.navigate(['report', newID, 0]);
          })
          .catch((reason) => {
            console.error(
              'Error opening new report with ID ' + newID + ': ' + reason
            );
          });
      },
      () => {
        console.error('Error duplicating report ' + report.id);
      }
    );
  }
  showCopy(report: Report) {
    this.selectedReport = report;
    this.copyVisible = true;
  }
  hideCopy() {
    this.copyVisible = false;
  }

  showFilterModal() {
    console.log('Showing filter modal');

    this.filterVisible = true;
  }

  applyFilter(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.refreshReports().then(() => {
        let result = this.reports;
        let filters = this.filterGroup.value;
        if (filters.idSearch && filters.idSearch.length > 0) {
          result = result.filter((report) =>
            report.id.includes(filters.idSearch)
          );
        }
        if (filters.completionStatus && filters.completionStatus !== 'All') {
          result = result.filter(
            (report) => report.completionStatus === filters.completionStatus
          );
        }
        if (filters.template && filters.template !== 'All') {
          result = result.filter(
            (report) => report.templateID === filters.template
          );
        }
        if (filters.authorSearch && filters.authorSearch.length > 0) {
          result = result.filter(
            (report) =>
              report.author && report.author.includes(filters.authorSearch)
          );
        }
        if (filters.branch && filters.branch !== 'All') {
          result = result.filter(
            (report) => report.branch && report.branch === filters.branch
          );
        }
        if (filters.tag && filters.tag !== 'All') {
          result = result.filter((report) => {
            if (report.tags) {
              let tagLabels: string[] = [];
              report.tags.forEach((tag) => {
                tagLabels.push(tag['label']);
              });
              console.warn(tagLabels);
              console.warn(this.filterGroup.value);
              return tagLabels.includes(filters.tag);
            }
          });
        }
        if (filters.completionStatus && filters.completionStatus !== 'All') {
          result = result.filter(
            (report) =>
              report.completionStatus &&
              report.completionStatus === filters.completionStatus
          );
        }
        if (filters.coverageFrom && filters.coverageFrom.length > 0) {
          result = result.filter(
            (report) =>
              report.coverageDate &&
              report.coverageDate >=
                this.convertTraditionalToISO(filters.coverageFrom)
          );
        }
        if (filters.coverageTo && filters.coverageTo.length > 0) {
          result = result.filter(
            (report) =>
              report.coverageDate &&
              report.coverageDate <=
                this.convertTraditionalToISO(filters.coverageTo)
          );
        }
        this.reports = result;
        console.log(result);
        resolve();
      });
    });
  }

  refreshReports(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this._UserService.getUserSnapshot().role === 'admin') {
        //then load all reports, within quantity limit
        if (this._sizeLimit !== 'all') {
          this._ReportService
            .fetchAllReportsWithLimit(+this._sizeLimit)
            .then((reports) => {
              this.reports = reports;
              console.log(reports);
              resolve();
            })
            .catch(() => {
              console.error(
                'Could not fetch reports for ' +
                  this._UserService.getUserSnapshot().email
              );
              reject();
            });
        } else {
          this._ReportService
            .fetchAllReports()
            .then((reports) => {
              this.reports = reports;
              this.getAllTagsFromReports();
              console.log(reports);
              resolve();
            })
            .catch(() => {
              console.error(
                'Could not fetch reports for ' +
                  this._UserService.getUserSnapshot().email
              );
              reject();
            });
        }
      }
    });
  }

  convertTraditionalToISO(inputString: string) {
    if (!inputString) {
      return null;
    }
    let stringPieces = inputString.split('/');
    if (stringPieces.length !== 3) {
      console.warn('Invalid date: ' + inputString);
      return null;
    }
    let monthNum: number = +stringPieces[0] - 1;
    let dateNum: number = +stringPieces[1];
    let yearNum: number = +stringPieces[2];
    let date = new Date();
    date.setMonth(monthNum);
    date.setDate(dateNum);
    date.setFullYear(yearNum);
    let result = date.toISOString();
    console.log('Converting: ' + inputString + ' to ' + result);
    return result;
  }

  getTemplateCBArray(index: number) {
    if (!(this.filterGroup.get('templateCBs') as FormArray)) {
      return null;
    }
    return (this.filterGroup.get('templatesCBs') as FormArray).controls[index];
  }

  getBranchCBArray(index: number) {
    if (!this.filterGroup.get('branchCBs')) {
      return null;
    }
    return (this.filterGroup.get('branchCBs') as FormArray).controls[index];
  }

  clearFilters() {
    this.filterGroup = this.fb.group({
      idSearch: [''],
      completionStatus: ['All'],
      template: ['All'],
      authorSearch: [''],
      coverageFrom: [''],
      coverageTo: [''],
      branch: ['All'],
    });
  }

  finishFilterModal() {
    this.filterLoading = ClrLoadingState.LOADING;
    console.log(this.filterGroup.value);
    this.applyFilter()
      .then(() => {
        this.filterLoading = ClrLoadingState.SUCCESS;
        this.hideFilterModal();
      })
      .catch((reason) => {
        console.error('Filter application failed: ' + reason);
        this.filterLoading = ClrLoadingState.ERROR;
      });
  }

  hideFilterModal() {
    this.filterVisible = false;
  }

  deleteReport(report: Report) {
    this.deleteLoading = ClrLoadingState.LOADING;
    this._ReportService.deleteReport(report).then(() => {
      let user = this._UserService.getUserSnapshot();
      if (user.role === 'admin') {
        //then load all reports, within quantity limit
        if (this._sizeLimit !== 'all') {
          this._ReportService
            .fetchAllReportsWithLimit(+this._sizeLimit)
            .then((reports) => {
              this.reports = reports;
              console.log(reports);
            })
            .catch(() => {
              console.error('Could not fetch reports for ' + user.email);
            });
        } else {
          this._ReportService
            .fetchAllReports()
            .then((reports) => {
              this.reports = reports;
              console.log(reports);
            })
            .catch(() => {
              console.error('Could not fetch reports for ' + user.email);
            });
        }
      } else {
        if (this._sizeLimit !== 'all') {
          this._ReportService
            .fetchReportsByBranchWithLimit(user.branch, +this._sizeLimit)
            .then((reports) => {
              this.reports = reports;
              console.log(reports);
            })
            .catch(() => {
              console.error('Could not fetch reports for ' + user.email);
            });
        } else {
          this._ReportService
            .fetchReportsByBranch(user.branch)
            .then((reports) => {
              this.reports = reports;
              console.log(reports);
            })
            .catch(() => {
              console.error('Could not fetch reports for ' + user.email);
            });
        }
      }
      this.deleteLoading = ClrLoadingState.SUCCESS;
      this.deleteVisible = false;
    });
  }
  showDelete(report: Report) {
    this.selectedReport = report;
    this.deleteVisible = true;
  }

  copyMagic(reportList: Report[]) {
    this.magicLoading = ClrLoadingState.LOADING;
    this._ReportService.getMagicString(reportList).then((stringResult) => {
      console.log(stringResult);
      this._clipboardService.copyFromContent(stringResult);
      this.magicLoading = ClrLoadingState.SUCCESS;
      alert('🔮 Magic string copied to clipboard.');
    });
  }

  hideDelete() {
    this.deleteVisible = false;
  }

  isUnfinished(report: Report) {
    if (report) return report.completionStatus === 'incomplete' ? true : false;
    else return false;
  }

  resendVerification() {
    this._UserService.sendVerificationEmail().then(() => {
      this.emailSent = true;
      this.showUnverifiedAlert = false;
    });
  }

  createReport(templateName: string, dropdownIndex: number) {
    this.templateLoadStatuses[dropdownIndex] = ClrLoadingState.LOADING;
    this._ReportService.createNewReport(templateName).then(
      (newID) => {
        this._ReportService
          .openReport(newID)
          .then(() => {
            console.log('Created report: ');
            console.log(this._ReportService.report);
            this._Router.navigate(['report', newID, 0]);
          })
          .catch((reason) => {
            console.error(
              'Error opening new report with ID ' + newID + ': ' + reason
            );
          });
      },
      () => {
        console.error(
          'Error creating new report with template ' + templateName
        );
      }
    );
  }

  navigate(report: Report) {
    console.log('Opening: ' + report.id);
    this._Router.navigate(['report', report.id, 0]);
  }

  json(obj) {
    return JSON.stringify(obj);
  }

  get isAdmin() {
    let user = this._UserService.getUserSnapshot();
    if (user && user.role === 'admin') {
      return true;
    } else return false;
  }

  showTemplateModal() {
    console.log(this._TemplateService.templateNames);
    this.templateModalVisible = true;
  }
  hideTemplateModal() {
    this.templateModalVisible = false;
  }
  showDuplicateTemplate(selectedTemplate) {
    this.selectedTemplateName = selectedTemplate;
    this.tempDuplicateVisible = true;
  }
  hideDuplicateTemplate() {
    this.tempDuplicateVisible = false;
  }
  duplicateTemplate(selectedTemplateName, newTemplateName) {
    this.templateDupStatus = ClrLoadingState.LOADING;
    this._TemplateService
      .duplicateTemplate(selectedTemplateName, newTemplateName)
      .then(() => {
        this.templateDupStatus = ClrLoadingState.SUCCESS;
        this.tempDuplicateVisible = false;
      });
  }
  deleteTemplate(templateID) {
    this._TemplateService.deleteTemplate(templateID).then(
      () => {
        console.log('Success');
        console.log(this._TemplateService.templateNames);
      },
      (reason) => {
        console.log('Error ' + reason);
      }
    );
  }
}
