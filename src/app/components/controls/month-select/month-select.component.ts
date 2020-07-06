import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css'],
})
export class MonthSelectComponent implements OnInit {
  @Input() label: string = 'Month: ';
  @Output() currentYear: number = new Date().getFullYear();
  @Output() month: Object;

  formGroup: FormGroup;

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
  }
}
