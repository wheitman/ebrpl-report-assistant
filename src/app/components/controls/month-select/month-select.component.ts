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
  @Output() currentYear: number = new Date().getFullYear();
  @Output() month: Object;

  formGroup: FormGroup;

  onChange = (month: Object) => {};
  onTouched = () => {};

  writeValue(month: Object): void {
    this.month = month;
    this.onChange(this.month);
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
      yearInput: new FormControl(this.currentYear, [
        Validators.min(1900),
        Validators.max(2100),
      ]),
    });
    this.formGroup.valueChanges.subscribe((newObj) => {
      this.month = {
        month: this.formGroup.get('monthInput').value,
        year: this.formGroup.get('yearInput').value,
      };
      this.onChange(this.month);
    });
  }
}
