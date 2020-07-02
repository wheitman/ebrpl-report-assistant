import { DatagridInterface } from './../../../interfaces/sections';
import { Component, OnInit, Input } from '@angular/core';
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
  rawRowValues: any[];

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
    this.data = [
      [
        '20-Somethings',
        '07/07/2020',
        'Dating in Modern Times',
        22,
        [{ label: 'Digital lab program', icon: 'terminal' }],
      ],
      [
        'Adults',
        '07/22/2020',
        'Wine Tasting Workshop',
        12,
        [
          {
            label: 'Subject related to Digital Literacy/Database Use',
            icon: 'network-globe',
          },
        ],
      ],
      [
        'Adults',
        '07/31/2020',
        'Peppa Pig Playtime',
        33,
        [
          {
            label: 'Portable device (including iPads and laptops)',
            icon: 'devices',
          },
        ],
      ],
    ];
    this.rawRowValues = [
      [
        '20-Somethings',
        '07/07/2020',
        'Dating in Modern Times',
        22,
        [null, null, null, null, true, null],
      ],
      [
        'Adults',
        '07/22/2020',
        'Wine Tasting Workshop',
        12,
        [null, true, null, null, null, null],
      ],
      [
        'Adults',
        '07/31/2020',
        'Peppa Pig Playtime',
        33,
        [null, null, null, true, null, null],
      ],
    ]; // array of rows
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

  isType(col: Object, type: string) {
    if (col['type'] == type) {
      return true;
    } else false;
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
    this.rawRowValues.push(this.formArray.getRawValue());
    console.log(this.formArray.getRawValue());
    this.data.push(row);
  }

  deleteRow(index: number) {
    console.log('Deleting row ' + index);
    (this.data as Array<any>).splice(index, 1);
    console.log(this.data);
  }

  finishAddModal() {
    this.addModalOpened = false;
    this.addRowFromFormArray();
    this.formArray.reset();
    console.log(this.data);
    console.log(this.rawRowValues);
  }

  openEditModal(rowIndex: number) {
    this.selectedRow = rowIndex;
    this.formArray.setValue(this.rawRowValues[rowIndex]);
    this.editModalOpened = true;
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
    this.data[rowIndex] = row;
  }

  addAnother() {
    this.addRowFromFormArray();
    this.formArray.reset();
    console.log(this.data);

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

  getCheckboxControl(arrayIndex: number, subarrayIndex: number) {
    let checkboxArray = this.formArray.controls[arrayIndex] as FormArray;
    return checkboxArray.controls[subarrayIndex];
  }

  isTagObj(obj) {
    if (obj[0] && obj[0]['label'] && obj[0]['icon']) return true;
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
