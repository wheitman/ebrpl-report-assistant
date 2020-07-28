import {
  FormGroup,
  FormControl,
  Validators,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  Output,
  forwardRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthSelectComponent),
      multi: true,
    },
  ],
})
export class MonthSelectComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  year: number = new Date().getFullYear();
  monthIndex: number;
  dateString: string; //ISO date string

  formGroup: FormGroup;

  onChange = (newDateString: string) => {};
  onTouched: any = () => {};

  set value(newDateString: string) {
    this.dateString = newDateString;
    this.onChange(newDateString);
    this.onTouched(newDateString);
  }

  writeValue(date: string): void {
    this.dateString = date;
    console.log(date);
    this.year = new Date(date).getFullYear();
    this.monthIndex = new Date(date).getMonth();
    console.log(this._monthNames[this.monthIndex]);
    this.formGroup.get('yearInput').setValue(this.year);
    this.formGroup
      .get('monthInput')
      .setValue(this._monthNames[this.monthIndex]);
  }

  registerOnChange(fn: (newDateString: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else this.formGroup.enable();
  }

  _monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      monthInput: new FormControl(),
      yearInput: new FormControl(this.year),
    });
    console.log('Initial is ', this.monthIndex);
    this.formGroup.valueChanges.subscribe((newValue) => {
      if (
        this.monthIndex !== this._monthNames.indexOf(newValue['monthInput'])
      ) {
        console.log(this._monthNames.indexOf(newValue['monthInput']));
        let monthIndex = this._monthNames.indexOf(newValue['monthInput']);
        if (monthIndex > -1)
          this.monthIndex = this._monthNames.indexOf(newValue['monthInput']);
      }

      this.year = newValue['yearInput'];
      let date = new Date();
      date.setMonth(this.monthIndex);
      date.setFullYear(this.year);
      this.dateString = date.toISOString();
      this.value = this.dateString;
    });
  }
}
