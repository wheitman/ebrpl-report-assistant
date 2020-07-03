import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  foolishPageStatuses: string[] = [
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
  ];

  constructor() {}

  setPageStatus(pageNumber: number, status: string) {
    pageNumber--;
    this.foolishPageStatuses[pageNumber] = status;
  }
  getPageStatus(pageNumber: number) {
    pageNumber--;
    return this.foolishPageStatuses[pageNumber];
  }
  getAllPageStatuses() {
    return this.foolishPageStatuses;
  }
}
