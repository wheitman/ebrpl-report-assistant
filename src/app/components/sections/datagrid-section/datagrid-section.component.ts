import { ConstantService } from './../../../services/constant.service';
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

  addModalOpened: boolean = false;
  editModalOpened: boolean = false;
  showItemAddConfirmation: boolean = false;
  selectedRow: number;

  constants: Object;

  constructor(public constantService: ConstantService) {
    super();
  }

  ngOnInit(): void {
    this.constantService.constants.subscribe((obj) => {
      this.constants = obj;
    });
    if (!this.interface.value) {
      this.interface.value = [];
      console.warn('No value supplied for datagrid ' + this.interface.title);
    }
    this.formGroup = new FormGroup({
      array: this.formArray,
    });
  }

  hasTag(tagArray: Object[], tagObj) {
    let tagLabels: string[] = [];
    tagArray.forEach((tag) => {
      tagLabels.push(tag['label']);
    });
    return tagLabels.includes(tagObj['label']);
  }

  buildFormFromInterface(editData?: Object[]) {
    console.log(editData);
    let cols = this.interface.columns;
    this.formArray = new FormArray([]);
    this.formLabels = [];
    if (cols) {
      cols.forEach((column, colIndex) => {
        //push a form control  and label for each column in the datagrid
        this.formLabels.push(column.label);
        //if the column is a tag-select, push a FormArray
        if (column.type === 'tag-select') {
          let tagArray = new FormArray([]);
          if (column.tags) {
            //push a checkbox for each tag
            column.tags.forEach((tag, tagIndex) => {
              let tagControl = new FormControl(false);
              //initalize the checkboxes
              if (
                editData &&
                editData[colIndex] &&
                editData[colIndex]['tags']
              ) {
                tagControl.setValue(
                  this.hasTag(editData[colIndex]['tags'], tag)
                );
                console.log(tag, this.hasTag(column['tags'], tag));
              }
              tagArray.push(tagControl);
            });
            this.formArray.push(tagArray);
          }
        } else {
          if (editData && editData[colIndex]) {
            console.log('Pushing ' + editData[colIndex]);
            this.formArray.push(new FormControl(editData[colIndex]));
          } else {
            this.formArray.push(new FormControl());
          }
        }
      });
      console.log(this.formArray.value);
    } else {
      // just keep the formArray empty if no columns supplied.
      console.warn('[Datagrid] Cannot build form. No columns could be found.');
      return;
    }

    // let cols = (this.interface as DatagridInterface).columns;
    // this.formArray.clear();
    // if (!cols) {
    //   console.error(this.interface);
    //   console.error(
    //     'No column values were supplied to ' + this.interface.title
    //   );
    //   return;
    // }
    // cols.forEach((column) => {
    //   this.formLabels.push(column['label']);
    //   if (column['type'] === 'tag-select') {
    //     let checkboxArray = new FormArray([]);

    //     //check if column has attached 'tags' property
    //     if (column['tags']) {
    //       column['tags'].forEach((tag) => {
    //         checkboxArray.push(new FormControl());
    //       });
    //     }

    //     this.formArray.push(checkboxArray);
    //   } else {
    //     this.formArray.push(new FormControl(''));
    //   }
    // });
  }

  addRowFromFormArray() {
    let row = [];
    (this.interface as DatagridInterface).columns.forEach((col, index) => {
      if (col['type'] === 'tag-select') {
        let tags: Object[] = [];
        col.tags.forEach((tag, j) => {
          if ((this.formArray.at(index) as FormArray).at(j).value === true)
            tags.push(tag);
        });
        row.push({ tags: tags });
      } else {
        row.push(this.formArray.at(index).value);
      }
    });
    console.log(this.interface);
    this.interface.value.push({ row: row });
    this.sectionChanged.emit(this.interface);
  }

  deleteRow(index: number) {
    (this.interface.value as Array<any>).splice(index, 1);
    this.sectionChanged.emit(this.interface);
  }

  finishAddModal() {
    this.addModalOpened = false;
    this.addRowFromFormArray();
    this.formArray.reset();
  }

  openEditModal(rowIndex: number) {
    this.selectedRow = rowIndex;
    let editData = this.interface.value[rowIndex];
    this.buildFormFromInterface(editData['row']);
    this.editModalOpened = true;
  }

  // convertToFormValues(dataRow): any[] {
  //   let formVals: any[] = [];
  //   //check if any column contains tags
  //   dataRow.row.forEach((col, index) => {
  //     if (
  //       (this.interface as DatagridInterface).columns[index]['type'] ===
  //       'tag-select'
  //     ) {
  //       let colTags: Object[] = [];
  //       if (this.interface['columns'][index]['tags']) {
  //         let colTags: Object[] = this.interface['columns'][index]['tags'];
  //       }

  //       let rowTags: Object[] = col.tags;
  //       let tagVals: boolean[] = [];
  //       let templateLabels: string[] = [];
  //       colTags.forEach((tag: Object) => {
  //         templateLabels.push(tag['label']);
  //       });
  //       let rowLabels: string[] = [];
  //       rowTags.forEach((tag: Object) => {
  //         rowLabels.push(tag['label']);
  //       });
  //       templateLabels.forEach((templateLabel) => {
  //         if (rowLabels.includes(templateLabel)) {
  //           tagVals.push(true);
  //         } else tagVals.push(false);
  //       });
  //       formVals.push(tagVals);
  //     } else {
  //       formVals.push(col);
  //     }
  //   });
  //   console.log(formVals);
  //   return formVals;
  // }

  finishEdits() {
    this.editModalOpened = false;
    this.editRow(this.selectedRow);
    this.formArray.reset();
  }
  editRow(rowIndex: number) {
    let row = [];
    (this.interface as DatagridInterface).columns.forEach((col, index) => {
      if (col['type'] === 'tag-select') {
        let tags: Object[] = [];
        col.tags.forEach((tag, j) => {
          if ((this.formArray.at(index) as FormArray).at(j).value === true)
            tags.push(tag);
        });
        row.push({ tags: tags });
      } else {
        row.push(this.formArray.at(index).value);
      }
    });
    console.log('Finished edits: ' + row);
    this.interface.value[rowIndex] = { row: row };
    this.sectionChanged.emit(this.interface);
  }

  openAddModal() {
    this.buildFormFromInterface();
    this.addModalOpened = true;
    console.log(this.constants['divisions']);
  }

  addAnother() {
    this.addRowFromFormArray();
    this.buildFormFromInterface();
    console.log(this.interface.value);

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
  editModalCancel() {
    this.editModalOpened = false;
    this.formArray.reset();
  }

  isTagObj(obj) {
    if (obj !== null && obj !== undefined && obj['tags']) return true;
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
