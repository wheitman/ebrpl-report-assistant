import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { TemplateService } from '../../services/template.service';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/report';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  templateNames: string[] = [''];

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

  constructor(
    public reportService: TemplateService,
    private _UserService: UserService
  ) {}

  ngOnInit(): void {
    this.reportService.getTemplateNames().subscribe((names) => {
      this.templateNames = names;
    });
    this.user.subscribe((user) => {
      if (user) this.showUnverifiedAlert = !user.emailVerified;
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
}
