import { AbstractSection } from './../sections/abstract-section/abstract-section.component';
import { Observable } from 'rxjs';
import { ReportService } from './../../services/report.service';
import { Page } from './../../interfaces/page';

import {
  Component,
  OnInit,
  ɵangular_packages_core_core_bj,
} from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

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

  constructor(
    private _ReportService: ReportService,
    private activeRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.templateId = params.get('template-id');
      this.pageNumber = +params.get('page-number');
      this.page$ = this._ReportService.getTemplatePage(this.pageNumber);
    });
    this.pageCount = this._ReportService.pageCount;
  }

  nextPage() {
    this._Router.navigate(['/report', 'Branch Usage', this.pageNumber + 1]);
    console.log('click');
  }
  previousPage() {
    this._Router.navigate(['/report', 'Branch Usage', this.pageNumber - 1]);
    console.log('clock');
  }
}
