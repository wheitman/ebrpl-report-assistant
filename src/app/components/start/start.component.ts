import { ReportService } from './../../services/report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  templateNames: string[] = [''];

  constructor(public reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getTemplateNames().subscribe((names) => {
      this.templateNames = names;
    });
  }
}
