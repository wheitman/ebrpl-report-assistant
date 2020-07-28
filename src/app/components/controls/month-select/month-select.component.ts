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
  @Input() label: string = 'Month: ';
  year: number = new Date().getFullYear();
  month: number;
  dateString: string; //ISO date string

  formGroup: FormGroup;

  onChange = (newDateString: string) => {
    console.log(newDateString);
  };
  onTouched: any = () => {};

  set value(newDateString: string) {
    this.dateString = newDateString;
    this.onChange(newDateString);
    this.onTouched(newDateString);
  }

  writeValue(date: string): void {
    this.dateString = date;
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

  _months: string[] = [
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
      monthInput: new FormControl(this._months[0]),
      yearInput: new FormControl(this.year, [
        Validators.min(1900),
        Validators.max(2100),
      ]),
    });
    this.formGroup.valueChanges.subscribe((newValue) => {
      this.month = this._months.indexOf(newValue['monthInput']);
      this.year = newValue['yearInput'];
      let date = new Date();
      date.setMonth(this.month);
      date.setFullYear(this.year);
      this.dateString = date.toISOString();
      this.value = this.dateString;
    });
  }
}
