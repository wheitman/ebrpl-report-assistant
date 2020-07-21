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

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  templateNames: string[];

  //modal booleans
  editVisible: boolean = false;
  copyVisible: boolean = false;
  deleteVisible: boolean = false;
  exportVisible: boolean = false;

  //alert booleans
  emailSent: boolean = false;

  //from UserService
  user: Observable<User> = this._UserService.getUserObservable();
  showUnverifiedAlert: boolean;
  reports: Report[] = [];
  selectedReport: Report;
  templateLoadStatuses: ClrLoadingState[];

  constructor(
    public _TemplateService: TemplateService,
    public _ReportService: ReportService,
    private _UserService: UserService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.user.subscribe((user) => {
      if (user) {
        this.showUnverifiedAlert = !user.emailVerified;
        this._ReportService
          .fetchReports(user.reportIDs)
          .then((reports) => {
            this.reports = reports;
          })
          .catch(() => {
            console.error('Could not fetch reports for ' + user.email);
          });
      }
    });

    //attach loading statuses to the templates in the 'new report' dropdown
    this.templateLoadStatuses = [];
    this._TemplateService.templateNames.forEach(() => {
      this.templateLoadStatuses.push(ClrLoadingState.DEFAULT);
    });
  }

  showExport(report: Report) {
    this.selectedReport = report;
    this.exportVisible = true;
  }
  hideExport() {
    this.exportVisible = false;
  }

  copyReport(report: Report) {}
  showCopy(report: Report) {
    this.selectedReport = report;
    this.copyVisible = true;
  }
  hideCopy() {
    this.copyVisible = false;
  }

  deleteReport(report: Report) {}
  showDelete(report: Report) {
    this.selectedReport = report;
    this.deleteVisible = true;
  }
  hideDelete() {
    this.deleteVisible = false;
  }

  isUnfinished(report: Report) {
    return report.completionStatus === 'incomplete' ? true : false;
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
            this._ReportService.attachToCurrentUser(true);
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
}
