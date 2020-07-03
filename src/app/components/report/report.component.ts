import { DatagridSection } from './../sections/datagrid-section/datagrid-section.component';
import { AbstractSection } from './../sections/abstract-section/abstract-section.component';
import { Observable } from 'rxjs';
import { TemplateService } from '../../services/template.service';
import { Page } from './../../interfaces/page';

import {
  Component,
  OnInit,
  ɵangular_packages_core_core_bj,
} from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SimpleInputSection } from '../sections/simple-input/simple-input.component';
import { ClrTimelineStepState } from '@clr/angular';

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
  pageTitles: String[] = [];
  pageSubtitles: String[] = [];
  datagrids$: Observable<DatagridSection[]>;
  simpleInputs$: Observable<SimpleInputSection[]>;

  constructor(
    private _TemplateService: TemplateService,
    private activeRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.templateId = params.get('template-id');
      this.pageNumber = +params.get('page-number');
      this.pageCount = this._TemplateService.pageCount;
      this.page$ = this._TemplateService.getTemplatePage(this.pageNumber);
      this.pageTitles = this._TemplateService.getPageTitles();
      this.pageSubtitles = this._TemplateService.getPageSubtitles();
      this.datagrids$ = this._TemplateService.getDatagrids(this.pageNumber);
      this.simpleInputs$ = this._TemplateService.getSimpleInputs(
        this.pageNumber
      );
    });
  }

  getPageButtonClass(pageNumber: number) {
    if (pageNumber == this.pageNumber) return 'btn btn-primary';
    else return 'btn';
  }
  pageCompleted(pageNumber: number) {
    return true;
  }
}
