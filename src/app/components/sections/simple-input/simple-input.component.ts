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

  hasTag(tagArray: Object[], tagObj) {
    let tagLabels: string[] = [];
    if (tagArray) {
      tagArray.forEach((tag) => {
        tagLabels.push(tag['label']);
      });
    }

    return tagLabels.includes(tagObj['label']);
  }

  convertISOtoTraditional(isoString: string) {
    let date = new Date(isoString);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let dt = date.getDate().toString();

    if (date.getDate() < 10) {
      dt = '0' + dt.toString();
    }
    if (date.getMonth() < 10) {
      month = '0' + month;
    }
    let result = month + '/' + dt + '/' + year;
    console.log('Converting: ' + isoString + ' to ' + result);
    return result;
  }

  convertTraditionalToISO(inputString: string) {
    let stringPieces = inputString.split('/');
    let monthNum: number = +stringPieces[0] - 1;
    let dateNum: number = +stringPieces[1];
    let yearNum: number = +stringPieces[2];
    let date = new Date();
    date.setMonth(monthNum);
    date.setDate(dateNum);
    date.setFullYear(yearNum);
    let result = date.toISOString();
    console.log('Converting: ' + inputString + ' to ' + result);
    return result;
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
            checkboxArray.push(
              new FormControl(this.hasTag(savedData[index], tag))
            );
          });
          this.formArray.push(checkboxArray);
        } else if (input['type'] === 'month-select') {
          this.formArray.push(
            //push the current date
            new FormControl(savedData[index])
          );
        } else if (input['typle'] === 'date-select') {
          this.formArray.push(
            new FormControl(this.convertISOtoTraditional(savedData[index]))
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
          this.formArray.push(
            //push the current date
            new FormControl(currentDate.toISOString())
          );
        } else {
          this.formArray.push(new FormControl(null));
        }
      }
    });
    console.log(this.formArray);
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
    this.formArray.valueChanges.subscribe((rawFormData: Object[]) => {
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

      //properly add tags from newData
      console.log(rawFormData);
      let processedVals: Object[] = [];
      rawFormData.forEach((obj, index) => {
        let type = this.interface.inputs[index].type;
        if (type === 'tag-select') {
          let checkTags: Object[] = [];
          let tags = this.interface.inputs[index].tags;
          (obj as Object[]).forEach((checked: boolean, tagIndex) => {
            if (checked) {
              checkTags.push(tags[tagIndex]);
            }
          });
          processedVals.push(checkTags);
        } else if (type === 'date-select') {
          processedVals.push(
            this.convertTraditionalToISO(rawFormData[index] as string)
          );
        } else {
          processedVals.push(rawFormData[index]);
        }
      });
      console.log(processedVals);
      this.interface.value = processedVals;
      this.sectionChanged.emit(this.interface);
    });
  }

  getConstant(constantName: string) {
    return ['a', 'b', 'c'];
  }
}
