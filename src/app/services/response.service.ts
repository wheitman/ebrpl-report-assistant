import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { Report } from '../interfaces/report';
import { NgIf } from '@angular/common';
import { report } from 'process';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  static foolishPageStatuses: string[] = [
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
  ];
  private static _reportMetaObj: Object;

  static report$: Observable<Report>;
  static reportObserver: Subscriber<Report>;
  static _report: Report = {
    id: undefined,
    title: undefined,
  };

  constructor() {}

  static setPageStatus(pageNumber: number, status: string) {
    pageNumber--;
    ResponseService.foolishPageStatuses[pageNumber] = status;
  }
  static getPageStatus(pageNumber: number) {
    pageNumber--;
    return ResponseService.foolishPageStatuses[pageNumber];
  }
  static getAllPageStatuses() {
    return ResponseService.foolishPageStatuses;
  }

  static generateID(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // IDs are in a 3-digit alphanumeric format. 238,328 combinations.
  // Case sensitive!
  static generateNewReport(templateID: string): Observable<Report> {
    //TODO: make serverside
    this.report$ = new Observable<Report>((observer) => {
      this._report.id = this.generateID(3);
      observer.next(ResponseService._report);
      this.reportObserver = observer;
    });
    return this.report$;
  }

  private static dateObjToString(obj): string {
    return obj['month'] + ' ' + obj['year'];
  }

  static set reportMetaObject(newObj) {
    ResponseService._reportMetaObj = newObj;
    newObj['inputs'].forEach((input) => {
      let key = input['properties']['response-key'];
      if (key === 'report-coverage-date') {
        ResponseService._report.coverageDate = ResponseService.dateObjToString(
          input['value']
        );
      } else if (key === 'report-additional-info') {
        ResponseService._report.additionalInfo = input['value'];
      }

      if (input['properties']['set-title']) {
        ResponseService._report.title = input['value'];
      }
    });
    this.reportObserver.next(ResponseService._report);
    console.log(ResponseService._report.coverageDate);
  }

  static get reportTitle(): string {
    return ResponseService._report.title;
  }
}
