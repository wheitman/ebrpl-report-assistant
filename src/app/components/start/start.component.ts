import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { ReportService } from 'src/app/services/report.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { TemplateService } from '../../services/template.service';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { User } from 'src/app/interfaces/user';
import { report, pages } from 'src/assets/dev/outline';
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

  selectedTemplateName: string;
  newTemplateName: string = '';

  //alert booleans
  emailSent: boolean = false;

  //from UserService
  user: Observable<User> = this._UserService.getUserObservable();
  showUnverifiedAlert: boolean;
  reports: Report[] = [];
  selectedReport: Report;
  templateLoadStatuses: ClrLoadingState[];
  deleteLoading: ClrLoadingState;
  templateDupStatus: ClrLoadingState = ClrLoadingState.DEFAULT;
  templateModalVisible: boolean = false;
  tempDuplicateVisible: boolean = false;

  reportCount: number = -1;

  _sizeLimit: string = '10';

  //from TemplateService
  templates: Observable<Map<string, Report>>;

  constructor(
    public _TemplateService: TemplateService,
    public _ReportService: ReportService,
    private _UserService: UserService,
    private _Router: Router,
    private _clipboardService: ClipboardService
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

  deleteReport(report: Report) {
    this.deleteLoading = ClrLoadingState.LOADING;
    this._ReportService.deleteReport(report).then(() => {
      let user = this._UserService.getUserSnapshot();
      this._ReportService
        .fetchReportsByBranch(user.branch)
        .then((reports) => {
          this.reports = reports;
          this.deleteLoading = ClrLoadingState.SUCCESS;
          this.hideDelete();
        })
        .catch(() => {
          console.error('Could not fetch reports for ' + user.email);
        });
    });
  }
  showDelete(report: Report) {
    this.selectedReport = report;
    this.deleteVisible = true;
  }

  copyMagic(report: Report) {
    this._ReportService.getMagicString(report.id).then((magicString) => {
      this._clipboardService.copyFromContent(magicString);
      alert('✅ Magic string copied to clipboard.');
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
