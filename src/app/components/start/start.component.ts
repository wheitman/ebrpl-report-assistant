import { TemplateService } from '../../services/template.service';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/report';

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

  //from UserService
  userVerified: boolean = true;
  branchName: string = 'Fixme';
  reports: Report[] = [];
  selectedReport: Report;

  constructor(public reportService: TemplateService) {}

  ngOnInit(): void {
    this.reportService.getTemplateNames().subscribe((names) => {
      this.templateNames = names;
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
}
