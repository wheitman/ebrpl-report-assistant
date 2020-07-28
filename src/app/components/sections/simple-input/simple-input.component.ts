import {
  SimpleInputInterface,
  Input as InputInterface,
} from './../../../interfaces/sections';
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
  formArray = new FormArray([], { updateOn: 'blur' });
  formGroup: FormGroup;
  formLabels: string[] = [];
  inputs: Array<Object>;
  @Input() interface: SimpleInputInterface;
  @Input() meta: boolean;
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
    this.inputs.forEach((input: InputInterface, index) => {
      this.formLabels.push(input['label']);

      //if saved data exists, fill the form with that to start
      if (this.interface.value) {
        let savedData = this.interface.value;
        if (input['type'] === 'tag-select') {
          let checkboxArray = new FormArray([]);
          input.tags.forEach((tag) => {
            checkboxArray.push(new FormControl(savedData[index]));
          });
          this.formArray.push(checkboxArray);
        } else if (input['type'] === 'month-select') {
          console.log('Pushing date: ', savedData[index]);
          this.formArray.push(
            //push the current date
            new FormControl(savedData[index])
          );
        } else {
          this.formArray.push(new FormControl(savedData[index]));
        }
      } else {
        if (input['type'] === 'tag-select') {
          let checkboxArray = new FormArray([]);
          input.tags.forEach((tag) => {
            checkboxArray.push(new FormControl(null));
          });
          this.formArray.push(checkboxArray);
        } else if (input['type'] === 'month-select') {
          let currentDate = new Date();
          console.log('Current date: ', currentDate.toISOString);
          this.formArray.push(
            //push the current date

            new FormControl(currentDate.toISOString())
          );
        } else {
          this.formArray.push(new FormControl(null));
        }
      }
    });
  }

  ngOnInit(): void {
    this.inputs = (this.interface as SimpleInputInterface).inputs;
    this.buildForm();
    this.formGroup = new FormGroup(
      {
        array: this.formArray,
      },
      { updateOn: 'blur' }
    );
    this.formArray.valueChanges.subscribe((newData) => {
      if (this.interface.type === 'meta' && this._ReportService.report) {
        this.interface.inputs.forEach((inputObj: InputInterface, index) => {
          let link = inputObj.link;

          console.log(link);
          if (link === 'coverageDate') {
            this._ReportService.setCoverageDate(this.formArray.value[index]);
          } else if (link === 'additionalInfo') {
            this._ReportService.setAdditionalInfo(this.formArray.value[index]);
          } else if (link === 'title') {
            this._ReportService.setTitle(this.formArray.value[index]);
          } else if (link === 'subject') {
            this._ReportService.setSubject(this.formArray.value[index]);
          } else if (link === 'tags') {
            this._ReportService.setTags(this.formArray.value[index]);
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
