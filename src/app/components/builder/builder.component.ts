import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements OnInit {
  tempPropsGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.tempPropsGroup = new FormGroup({
      templateTitle: new FormControl(''),
      templateSubtitle: new FormControl(''),
    });
  }
}
