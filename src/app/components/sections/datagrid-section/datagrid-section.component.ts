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
  _interface: DatagridInterface;

  @Output() sectionChanged = new EventEmitter<Object>();

  addModalOpened: boolean = false;
  editModalOpened: boolean = false;
  showItemAddConfirmation: boolean = false;
  selectedRow: number;

  constructor() {
    super();
  }

  objToDgInterface(obj) {
    let newInterface: DatagridInterface = {
      title: obj['title'] || null,
      subtitle: obj['subtitle'] || null,
      columns: obj['columns'],
      data: undefined,
      type: obj['type'],
      index: undefined,
      complete: false,
    };
    return newInterface;
  }

  ngOnInit(): void {
    this._interface = this.objToDgInterface(this.templateObj['section']);
    this.constants = this.templateObj['constants'] || undefined;
    if (this.templateObj['section']['data']) {
      this._interface.data = this.templateObj['section']['data'];
    } else {
      this._interface.data = [];
    }
    this.sectionChanged.emit(this._interface);
    this.buildFormFromInterface();
    this.formGroup = new FormGroup({
      array: this.formArray,
    });
  }

  buildFormFromInterface() {
    let cols = this._interface.columns;
    if (!cols) {
      console.error('No column values were supplied to ' + this.title);
      return;
    }
    cols.forEach((column) => {
      this.formLabels.push(column['label']);
      if (column['type'] === 'tag-select') {
        let checkboxArray = new FormArray([]);
        this.templateObj['section']['tags'].forEach((tag) => {
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
    this._interface.columns.forEach((col, index) => {
      if (col['type'] === 'tag-select') {
        let tags: Object[] = [];
        this.templateObj['section']['tags'].forEach((tag, j) => {
          if ((this.formArray.at(index) as FormArray).at(j).value === true)
            tags.push(tag);
        });
        row.push(tags);
      } else {
        row.push(this.formArray.at(index).value);
      }
    });
    this._interface.data.push(row);
    this.sectionChanged.emit(this._interface);
  }

  deleteRow(index: number) {
    (this._interface.data as Array<any>).splice(index, 1);
    this.sectionChanged.emit(this._interface);
  }

  finishAddModal() {
    this.addModalOpened = false;
    this.addRowFromFormArray();
    this.formArray.reset();
  }

  openEditModal(rowIndex: number) {
    this.selectedRow = rowIndex;
    let editData = this._interface.data[rowIndex];

    this.formArray.setValue(this.convertToFormValues(editData));
    this.editModalOpened = true;
  }

  convertToFormValues(dataRow): any[] {
    let formVals: any[] = [];
    //check if any column contains tags
    dataRow.forEach((col, index) => {
      if (this._interface.columns[index]['type'] === 'tag-select') {
        let templateTags: Object[] = this.templateObj['section']['tags'];
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
    this._interface.columns.forEach((col, index) => {
      if (col['type'] === 'tag-select') {
        let tags: Object[] = [];
        this.templateObj['section']['tags'].forEach((tag, j) => {
          if ((this.formArray.at(index) as FormArray).at(j).value === true)
            tags.push(tag);
        });
        row.push(tags);
      } else {
        row.push(this.formArray.at(index).value);
      }
    });
    this._interface.data[rowIndex] = row;
    this.sectionChanged.emit(this._interface);
  }

  addAnother() {
    this.addRowFromFormArray();
    this.formArray.reset();
    console.log(this._interface.data);

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
