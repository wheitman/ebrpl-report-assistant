import { Page } from './../interfaces/page';
import { TemplateService } from './template.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Report } from '../interfaces/report';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private static report$: BehaviorSubject<Report>;
  private static localStorageKey: string = 'LOCALREPORT';
  private static _reportOpened: boolean;
  private static _report: Report = {
    pageCount: undefined,
    id: undefined,
    templateID: undefined,
    title: undefined,
    pageStatuses: undefined,
    pages: [],
  };

  constructor() {
    ResponseService._reportOpened = false;
    ResponseService.report$ = new BehaviorSubject<Report>(
      ResponseService._report //send undefined _report at first
    );
  }

  static setSection(
    pageIndex: number,
    sectionIndex: number,
    sectionObj: Object
  ) {
    if (
      ResponseService._reportOpened &&
      ResponseService._report.pages[pageIndex]
    ) {
      // set the section
      (ResponseService._report.pages[pageIndex] as Page).sections[
        sectionIndex
      ] = sectionObj;
      console.log(
        ResponseService._report.pages[pageIndex]['sections'][sectionIndex]
      );
    } else {
      console.error(
        "[ResponseService] Couldn't edit section. Is the report opened?"
      );
    }
  }

  static closeReport() {
    ResponseService._reportOpened = false;
    ResponseService._report = null;
    console.log('The report has been closed');
  }

  /*
  Sets the _report object
  
  If no reportID is specified, a new one is generated and a blank
  report is retrieved

  IDs are in a 3-digit alphanumeric format. 238,328 combinations.
  Case sensitive!
  */
  static openReport(templateID: string, reportID?: string): Observable<Report> {
    //FIXME: make serverside, delete all this!
    // ResponseService._report = JSON.parse(
    //   localStorage.getItem(ResponseService.localStorageKey)
    // );
    // ResponseService.generateExampleReport();
    // ResponseService.saveLocally();
    ResponseService._report = JSON.parse(
      localStorage.getItem(ResponseService.localStorageKey)
    );
    console.log(ResponseService._report);
    ResponseService._reportOpened = true;

    ResponseService.reportChanged();
    return ResponseService.report$;
  }

  private static saveToServer() {
    //skeleton
  }

  private static saveLocally() {
    if (ResponseService._report.id) {
      localStorage.setItem(
        ResponseService.localStorageKey,
        JSON.stringify(ResponseService._report)
      );
      console.log('Saved locally');
    }
  }

  static setPageStatus(pageIndex: number, status: string) {
    ResponseService._report.pageStatuses[pageIndex] = status;
  }

  //FIXME: make serverside, delete this
  private static generateID(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  private static generateExampleReport() {
    console.warn('Generating example report...');
    ResponseService._report = {
      pageCount: 4,
      id: 'EXA',
      templateID: 'Branch Usage',
      title: 'October 2019',
      pageStatuses: ['incomplete', 'incomplete', 'incomplete', 'incomplete'],
      pages: [
        {
          title: 'Programs in the library',
          sections: [{}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          title: 'Other library events',
          sections: [{}, {}, {}],
        },
        {
          title: 'Staff presentations and events outside the library',
          sections: [{}, {}, {}, {}, {}, {}, {}],
        },
        {
          title: 'Other categories tracked',
          sections: [{}, {}, {}, {}, {}, {}, {}],
        },
      ],
    };
    console.log(ResponseService._report);
    ResponseService._reportOpened = true;
  }

  static get reportObservable() {
    return ResponseService.report$;
  }

  private static reportChanged() {
    ResponseService.report$.next(ResponseService._report);
    ResponseService.saveLocally();
  }

  static parseMetaObject(newObj) {
    newObj['inputs'].forEach((input) => {
      let key = input['properties']['response-key'];
      // set coverage date property
      if (key === 'report-coverage-date') {
        let dateString = input['value']['month'] + ' ' + input['value']['year'];
        ResponseService._report.coverageDate = input['value'];
        // set additional info
      } else if (key === 'report-additional-info') {
        ResponseService._report.additionalInfo = input['value'];
      }

      //set title property
      if (input['properties']['set-title']) {
        // if it's a date, convert to a proper string first
        if (key === 'report-coverage-date') {
          let dateString =
            input['value']['month'] + ' ' + input['value']['year'];
          ResponseService._report.title = dateString;
        } else {
          ResponseService._report.title = input['value'];
        }
      }
    });
    // broadcast updated report to Subject
    ResponseService.reportChanged();
  }

  static get reportOpened() {
    return ResponseService._reportOpened;
  }
}
