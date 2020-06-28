import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-abstract-section',
  templateUrl: './abstract-section.component.html',
  styleUrls: ['./abstract-section.component.css'],
})
export class AbstractSection implements OnInit {
  _title: string;
  _subtitle: string;
  _data: any;

  constructor(
    @Inject(String) title: string,
    @Inject(String) subtitle: string = null
  ) {
    this._title = title;
    this._subtitle = subtitle;
  }

  ngOnInit(): void {}
  set title(newTitle) {
    this._title = newTitle;
  }
  set subtitle(newSubtitle) {
    this._subtitle = newSubtitle;
  }
  set data(newData) {
    this._data = newData;
  }

  get title() {
    return this._title;
  }
  get subtitle() {
    return this._subtitle;
  }
  get data() {
    return this._data;
  }
}
