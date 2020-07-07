import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() valueChanged = new EventEmitter<Object>();

  constructor() {
    super();
  }

  buildForm() {
    if (!this.inputs) {
      console.error('No inputs were found for ' + this.title);
      return;
    }
    this.inputs.forEach((input) => {
      this.formLabels.push(input['label']);
      if (input['type'] === 'tag-select') {
        let checkboxArray = new FormArray([]);
        this.templateObj['section']['tags'].forEach((tag) => {
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
    });
  }

  ngOnInit(): void {
    this.inputs = this.templateObj['section']['inputs'];
    this.buildForm();
    this.data = this.templateObj['section'];
    this.formGroup = new FormGroup({
      array: this.formArray,
    });
    this.formArray.valueChanges.subscribe((newData) => {
      let dataObj = this.templateObj['section'];
      this.inputs.forEach((input, index) => {
        dataObj['inputs'][index]['value'] = newData[index];
      });
      // ResponseService.reportMetaObject = dataObj;
      this.valueChanged.emit(dataObj);
    });
  }
}
