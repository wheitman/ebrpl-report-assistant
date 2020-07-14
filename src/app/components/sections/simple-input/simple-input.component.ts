import { SimpleInputInterface } from './../../../interfaces/sections';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractSection } from '../abstract-section/abstract-section.component';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.css'],
})
export class SimpleInputSection extends AbstractSection implements OnInit {
  formArray = new FormArray([]);
  formGroup: FormGroup;
  formLabels: string[] = [];
  inputs: Array<Object>;
  @Input() interface: SimpleInputInterface;
  @Input() constants: Object;
  @Output() sectionChanged = new EventEmitter<Object>();

  constructor() {
    super();
  }

  buildForm() {
    if (!this.inputs) {
      console.error('No inputs were found for ' + this.title);
      return;
    }
    this.inputs.forEach((input, index) => {
      this.formLabels.push(input['label']);

      //if saved data exists, fill the form with that to start
      if (this.interface.data) {
        let savedData = this.interface.data;
        if (input['type'] === 'tag-select') {
          let checkboxArray = new FormArray([]);
          this.interface.tags.forEach((tag) => {
            checkboxArray.push(new FormControl(savedData[index]));
          });
          this.formArray.push(checkboxArray);
        } else if (input['type'] === 'month-select') {
          this.formArray.push(new FormControl(savedData[index]));
        } else {
          this.formArray.push(new FormControl(savedData[index]));
        }
      } else {
        if (input['type'] === 'tag-select') {
          let checkboxArray = new FormArray([]);
          this.interface.tags.forEach((tag) => {
            checkboxArray.push(new FormControl());
          });
          this.formArray.push(checkboxArray);
        } else if (input['type'] === 'month-select') {
          this.formArray.push(
            new FormControl({ month: 'January', year: '2020' })
          );
        } else {
          this.formArray.push(new FormControl('', [Validators.required]));
        }
      }
    });
  }

  ngOnInit(): void {
    this.inputs = (this.interface as SimpleInputInterface).inputs;
    this.buildForm();
    this.formGroup = new FormGroup({
      array: this.formArray,
    });
    this.formArray.valueChanges.subscribe((newData) => {
      // ResponseService.reportMetaObject = dataObj;
      this.interface.data = newData;
      this.sectionChanged.emit(this.interface);
    });
  }
}