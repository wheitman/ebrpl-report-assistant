import { SimpleInputInterface } from './../../../interfaces/sections';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractSection } from '../abstract-section/abstract-section.component';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service';

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

  constructor(private _ReportService: ReportService) {
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
      if (this.interface.value) {
        let savedData = this.interface.value;
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
            //push the current date
            new FormControl(new Date().toISOString())
          );
        } else {
          this.formArray.push(new FormControl(''));
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
      if (this.interface.meta && this.interface.meta === true) {
        this.interface.inputs.forEach((inputObj, index) => {
          if (inputObj['links']) {
            let links = inputObj['links'] as string[];
            links.forEach((link) => {
              console.log(link);
              if (link === 'coverageDate') {
                this._ReportService.setCoverageDate(
                  this.formArray.value[index]
                );
              }
            });
          }
        });
      }

      // ResponseService.reportMetaObject = dataObj;
      this.interface.value = newData;
      this.sectionChanged.emit(this.interface);
    });
  }

  getConstant(constantName: string) {
    return ['a', 'b', 'c'];
  }
}
