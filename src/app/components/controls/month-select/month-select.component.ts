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

  onChange = (month: Object) => {};
  onTouched = () => {};

  writeValue(date: string): void {
    this.dateString = date;
    this.onChange(this.dateString);
    if (this.formGroup) {
      let dateObj = new Date(this.dateString);
      let monthIndex = dateObj.getMonth();
      let year = dateObj.getFullYear();
      this.formGroup.get('monthInput').setValue(this._months[monthIndex]);
      this.formGroup.get('yearInput').setValue(year);
    }
  }

  registerOnChange(fn: (month: Object) => void): void {
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
    this.formGroup.valueChanges.subscribe((newObj) => {
      let date = new Date();
      let month = this.formGroup.get('monthInput').value;
      let monthIndex = this._months.indexOf(month);
      date.setMonth(monthIndex);
      date.setFullYear(this.formGroup.get('yearInput').value);
      this.dateString = date.toISOString();
      this.onChange(this.dateString);
    });
  }
}
