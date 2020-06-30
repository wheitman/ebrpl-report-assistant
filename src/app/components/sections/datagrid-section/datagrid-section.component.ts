import { Component, OnInit, Input } from '@angular/core';
import { AbstractSection } from '../abstract-section/abstract-section.component';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'datagrid-section',
  templateUrl: './datagrid-section.component.html',
  styleUrls: ['./datagrid-section.component.css'],
})
export class DatagridSection extends AbstractSection implements OnInit {
  @Input() columns: Object;

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.title);
    this.columns = this.templateObj['columns'];
  }
}
