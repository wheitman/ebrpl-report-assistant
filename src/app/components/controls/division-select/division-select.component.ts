import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-division-select',
  templateUrl: './division-select.component.html',
  styleUrls: ['./division-select.component.css'],
})
export class DivisionSelectComponent implements OnInit {
  @Input() label: string = 'Divisions';

  constructor() {}

  ngOnInit(): void {}
}
