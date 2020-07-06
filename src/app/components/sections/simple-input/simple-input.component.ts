import { Component, OnInit } from '@angular/core';
import { AbstractSection } from '../abstract-section/abstract-section.component';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

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
      } else {
        this.formArray.push(new FormControl('', [Validators.required]));
      }
    });
  }

  ngOnInit(): void {
    console.log(this.templateObj);
    this.inputs = this.templateObj['section']['inputs'];
    this.buildForm();
    this.formGroup = new FormGroup({
      array: this.formArray,
    });
    console.log('Title: ' + this.title);
  }
}
