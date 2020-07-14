import { TemplateService } from './../../../services/template.service';
import { DatagridInterface } from './../../../interfaces/sections';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractSection } from '../abstract-section/abstract-section.component';
import { __makeTemplateObject } from 'tslib';
import {
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Form,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'datagrid-section',
  templateUrl: './datagrid-section.component.html',
  styleUrls: ['./datagrid-section.component.css'],
})
export class DatagridSection extends AbstractSection implements OnInit {
  formArray = new FormArray([]);
  formGroup: FormGroup;
  formLabels: string[] = [];

  @Output() sectionChanged = new EventEmitter<Object>();
  @Input() interface: DatagridInterface;
  @Input() constants: Object;

  addModalOpened: boolean = false;
  editModalOpened: boolean = false;
  showItemAddConfirmation: boolean = false;
  selectedRow: number;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.buildFormFromInterface();
    this.formGroup = new FormGroup({
      array: this.formArray,
    });
  }

  buildFormFromInterface() {
    let cols = (this.interface as DatagridInterface).columns;
    if (!cols) {
      console.error(this.interface);
      console.error(
        'No column values were supplied to ' + this.interface.title
      );
      return;
    }
    cols.forEach((column) => {
      this.formLabels.push(column['label']);
      if (column['type'] === 'tag-select') {
        let checkboxArray = new FormArray([]);
        (this.interface as DatagridInterface).tags.forEach((tag) => {
          checkboxArray.push(new FormControl());
        });
        this.formArray.push(checkboxArray);
      } else {
        this.formArray.push(new FormControl('', [Validators.required]));
      }
    });
  }

  addFormElement() {
    this.formArray.push(new FormControl(''));
  }

  addRowFromFormArray() {
    let row = [];
    (this.interface as DatagridInterface).columns.forEach((col, index) => {
      if (col['type'] === 'tag-select') {
        let tags: Object[] = [];
        (this.interface as DatagridInterface).tags.forEach((tag, j) => {
          if ((this.formArray.at(index) as FormArray).at(j).value === true)
            tags.push(tag);
        });
        row.push(tags);
      } else {
        row.push(this.formArray.at(index).value);
      }
    });
    console.log(this.interface);
    this.interface.data.push(row);
    this.sectionChanged.emit(this.interface);
  }

  deleteRow(index: number) {
    (this.interface.data as Array<any>).splice(index, 1);
    this.sectionChanged.emit(this.interface);
  }

  finishAddModal() {
    this.addModalOpened = false;
    this.addRowFromFormArray();
    this.formArray.reset();
  }

  openEditModal(rowIndex: number) {
    this.selectedRow = rowIndex;
    let editData = this.interface.data[rowIndex];

    this.formArray.setValue(this.convertToFormValues(editData));
    this.editModalOpened = true;
  }

  convertToFormValues(dataRow): any[] {
    let formVals: any[] = [];
    //check if any column contains tags
    dataRow.forEach((col, index) => {
      if (
        (this.interface as DatagridInterface).columns[index]['type'] ===
        'tag-select'
      ) {
        let templateTags: Object[] = (this.interface as DatagridInterface).tags;
        let rowTags: Object[] = col;
        let tagVals: boolean[] = [];
        let templateLabels: string[] = [];
        templateTags.forEach((tag: Object) => {
          templateLabels.push(tag['label']);
        });
        let rowLabels: string[] = [];
        rowTags.forEach((tag: Object) => {
          rowLabels.push(tag['label']);
        });
        templateLabels.forEach((templateLabel) => {
          if (rowLabels.includes(templateLabel)) {
            tagVals.push(true);
          } else tagVals.push(false);
        });
        formVals.push(tagVals);
      } else {
        formVals.push(col);
      }
    });
    return formVals;
  }

  finishEdits() {
    this.editModalOpened = false;
    this.editRow(this.selectedRow);
  }
  editRow(rowIndex: number) {
    let row = [];
    (this.interface as DatagridInterface).columns.forEach((col, index) => {
      if (col['type'] === 'tag-select') {
        let tags: Object[] = [];
        (this.interface as DatagridInterface).tags.forEach((tag, j) => {
          if ((this.formArray.at(index) as FormArray).at(j).value === true)
            tags.push(tag);
        });
        row.push(tags);
      } else {
        row.push(this.formArray.at(index).value);
      }
    });
    this.interface.data[rowIndex] = row;
    this.sectionChanged.emit(this.interface);
  }

  openAddModal() {
    this.addModalOpened = true;
    console.log(this.constants['divisions']);
  }

  addAnother() {
    this.addRowFromFormArray();
    this.formArray.reset();
    console.log(this.interface.data);

    //show a confirmation banner, then hide after 3 seconds
    this.showItemAddConfirmation = true;
    setTimeout(() => {
      this.showItemAddConfirmation = false;
    }, 3000);
  }

  addModalCancel() {
    this.addModalOpened = false;
    this.formArray.reset();
  }

  isTagObj(obj) {
    if (
      obj !== null &&
      obj !== undefined &&
      obj[0] &&
      obj[0]['label'] &&
      obj[0]['icon']
    )
      return true;
    else return false;
  }

  checkArrayValidity() {
    this.formArray.controls.forEach((control) => {
      console.log(control.value + ' | ' + control.status);
    });
    console.log(this.formArray.status);
    console.log(this.formArray.valid);
  }
}