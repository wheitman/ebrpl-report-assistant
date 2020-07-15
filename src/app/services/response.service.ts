import { SectionInterface } from './../interfaces/sections';
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
    metaSection: undefined,
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
    sectionObj: SectionInterface
  ) {
    if (
      ResponseService._reportOpened &&
      ResponseService._report.pages[pageIndex]
    ) {
      console.log(
        ResponseService._report.pages[pageIndex]['sections'][sectionIndex]
      );
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
    ResponseService.saveLocally();
  }

  static getConstants(): Object {
    return TemplateService.getConstants();
  }

  static closeReport() {
    ResponseService._reportOpened = false;
    ResponseService._report = null;
    ResponseService.report$.next(ResponseService._report);
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
    ResponseService._report = {
      pageCount: 4,
      id: 'EXA',
      templateID: 'Branch Usage',
      title: 'May 2020',
      pageStatuses: ['incomplete', 'incomplete', 'incomplete', 'incomplete'],
      metaSection: {
        title: 'Basic information',
        type: 'simple-input',
        inputs: [
          {
            label: 'This report is for the month of:',
            type: 'month-select',
            value: null,
            properties: {
              'response-key': 'report-coverage-date',
              'set-title': true,
            },
          },
          {
            label: 'Additional info (optional):',
            type: 'textarea',
            value: null,
            properties: {
              'response-key': 'report-additional-info',
            },
          },
        ],
        data: [],
      },
      pages: [
        {
          title: 'Programs in the library',
          sections: [
            {
              title: 'Regular programs',
              subtitle:
                'Presented or co-sponsored by the library. Includes story/crafts, LEGO storytime, Tax Assistance.',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
                { label: 'Tags', type: 'tag-select' },
              ],
              data: [
                [
                  '20-Somethings',
                  '07/07/2020',
                  'Dating in Modern Times',
                  22,
                  [{ label: 'Digital lab program', icon: 'terminal' }],
                ],
                [
                  'Adults',
                  '07/22/2020',
                  'Wine Tasting Workshop',
                  12,
                  [
                    {
                      label: 'Subject related to Digital Literacy/Database Use',
                      icon: 'network-globe',
                    },
                  ],
                ],
                [
                  'Adults',
                  '07/31/2020',
                  'Peppa Pig Playtime',
                  33,
                  [
                    {
                      label: 'Portable device (including iPads and laptops)',
                      icon: 'devices',
                    },
                  ],
                ],
              ],
              type: 'datagrid',
              complete: false,
              tags: [
                { label: 'STEM/STEAM', icon: 'flask' },
                {
                  label: 'Subject related to Digital Literacy/Database Use',
                  icon: 'network-globe',
                },
                {
                  label: 'Subject related to Health and Wellness',
                  icon: 'heart',
                },
                {
                  label: 'Portable device (including iPads and laptops)',
                  icon: 'devices',
                },
                { label: 'Digital lab program', icon: 'terminal' },
                { label: 'Innovation/Maker Space', icon: 'atom' },
              ],
            },
            {
              title: 'Storytimes',
              type: 'simple-input',
              inputs: [
                { label: 'Number of programs', type: 'number' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
            {
              title: 'Computer classes',
              subtitle:
                'Includes teaching or using computer applications, digital literacy, etc.',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
                { label: 'Hours', type: 'number' },
                { label: 'Tags', type: 'tag-select' },
              ],
              tags: [
                {
                  label: 'Portable device (including iPads and laptops)',
                  icon: 'devices',
                },
                { label: 'Digital lab program', icon: 'terminal' },
                { label: 'Innovation/Maker Space', icon: 'atom' },
              ],
              data: [],
            },
            {
              title: 'Computer classes',
              subtitle:
                'Includes teaching or using computer applications, digital literacy, etc.',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
                { label: 'Hours', type: 'number' },
                { label: 'Tags', type: 'tag-select' },
              ],
              data: [],
              type: 'datagrid',
              complete: false,
              tags: [
                {
                  label: 'Portable device (including iPads and laptops)',
                  icon: 'devices',
                },
                { label: 'Digital lab program', icon: 'terminal' },
                { label: 'Innovation/Maker Space', icon: 'atom' },
              ],
            },
            {
              title: 'Book clubs',
              subtitle: 'Held in the library, sponsored by the library',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Club/title or topic', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
              type: 'datagrid',
              complete: false,
              tags: null,
            },
            {
              title: 'Tours',
              subtitle: null,
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Group and topic (if any)', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
              type: 'datagrid',
              complete: false,
              tags: null,
            },
            {
              title: 'Demonstrations',
              subtitle: null,
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
              type: 'datagrid',
              complete: false,
              tags: null,
            },
            {
              title: 'Tutoring',
              subtitle:
                'Takes place in the library, but not organized or taught by the library',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Number of sessions', type: 'number' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
              type: 'datagrid',
              complete: false,
              tags: null,
            },
            {
              title: 'Special education',
              subtitle:
                "Occupational instruction classes 'working' for you or group home visiting the library. Not a formal tour.",
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Number of sessesions', type: 'number' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
              type: 'datagrid',
              complete: false,
              tags: null,
            },
          ],
        },
        {
          title: 'Other library events',
          sections: [
            {
              title: 'Room Usage',
              type: 'datagrid',
              columns: [
                { label: 'Number of uses', type: 'number' },
                { label: 'Room', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [
                [null, 'Group Study Room/Alternative Meeting Room', null],
                [null, 'Quiet Reading Room', null],
                [null, 'Teen Study Room', null],
                [null, "Children's Study Room", null],
                [null, 'Digital Lab', null],
                [null, 'Innovation Space', null],
              ],
            },
            {
              title: 'Civic Groups and Organizations Using Meeting Rooms',
              type: 'simple-input',
              inputs: [
                { label: 'Number of groups', type: 'number' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
            {
              title: 'Impromptu Groups Meeting in the Library',
              subtitle:
                'Not involved in formal instruction or scheduled tours. Includes group homes, classes, and exam proctoring.',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Number of classes/exams', type: 'number' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
          ],
        },
        {
          title: 'Staff presentations and events outside the library',
          sections: [
            {
              title: 'Speech or lecture',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
            {
              title: 'Storytimes or other performances',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
            {
              title: 'Booktalks',
              type: 'datagrid',
              columns: [
                { label: 'Category', type: 'text' },
                { label: 'Total # of talks', type: 'number' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [
                ['Book Clubs', null, null],
                ['Elementary', null, null],
                ['Middle school', null, null],
                ['High school', null, null],
                ['College', null, null],
                ['Other', null, null],
              ],
            },
            {
              title: 'Research talks',
              type: 'datagrid',
              columns: [
                { label: 'Category', type: 'text' },
                { label: 'Total # of talks', type: 'number' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [
                ['Elementary', null, null],
                ['Middle school', null, null],
                ['High school', null, null],
                ['College', null, null],
                ['Other', null, null],
              ],
            },
            {
              title: 'Promotional events',
              type: 'datagrid',
              columns: [
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
            {
              title:
                'Community meetings attended by staff representing the library',
              type: 'datagrid',
              columns: [
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
            {
              title: 'Media presentations',
              type: 'datagrid',
              columns: [
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
              ],
              data: [],
            },
          ],
        },
        {
          title: 'Other categories tracked',
          sections: [
            {
              title: 'Volunteers',
              type: 'datagrid',
              columns: [
                { label: 'Category', type: 'text' },
                { label: '# of volunteers', type: 'number' },
                { label: 'Total hours worked', type: 'number' },
              ],
              data: [
                ['Adult', null, null],
                ['Teen', null, null],
                ['Children', null, null],
              ],
            },
            {
              title: 'Outreach contacts to area businesses and organizations',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Contact name', type: 'text' },
              ],
              data: [],
            },
            {
              title: 'Displays and exhibits',
              subtitle: 'Not just for book displays',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Title', type: 'text' },
              ],
              data: [],
            },
            {
              title: 'Drive-thru window total',
              type: 'simple-input',
              inputs: [{ label: 'Total', type: 'number' }],
              data: [],
            },
            {
              title: 'Books and magazines read in-house',
              type: 'simple-input',
              inputs: [
                { label: '# of books', type: 'number' },
                { label: '# of magazines', type: 'number' },
              ],
              data: [],
            },
            {
              title: 'Miscellaneous tracked items',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Total', type: 'number' },
                { label: 'Title', type: 'text' },
              ],
              data: [
                [null, null, 'Coloring pages'],
                [null, null, 'Reading Dogs'],
                [null, null, 'Read to your bunny'],
              ],
            },
            {
              title: 'Training - in-house for staff',
              subtitle:
                'Including training via webinar or personal online training. Not including personal Ethics or Sexual Harassment Prevention Training.',
              type: 'datagrid',
              columns: [
                { label: 'Division', type: 'division-select' },
                { label: 'Date', type: 'date-select' },
                { label: 'Title', type: 'text' },
                { label: 'Attendance', type: 'number' },
                { label: 'Hours', type: 'number' },
                { label: 'Tags', type: 'tag-select' },
              ],
              tags: [
                {
                  label: 'Portable device (including iPads and laptops)',
                  icon: 'devices',
                },
                { label: 'Digital lab program', icon: 'terminal' },
                { label: 'Innovation/Maker Space', icon: 'atom' },
              ],
              data: [],
            },
          ],
        },
      ],
      coverageDate: { month: 'May', year: 2020 },
      additionalInfo: '',
    };

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
      metaSection: {
        title: 'Basic information',
        type: 'simple-input',
        inputs: [
          {
            label: 'This report is for the month of:',
            type: 'month-select',
            value: null,
            properties: {
              'response-key': 'report-coverage-date',
              'set-title': true,
            },
          },
          {
            label: 'Additional info (optional):',
            type: 'textarea',
            value: null,
            properties: {
              'response-key': 'report-additional-info',
            },
          },
        ],
      },
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
    console.log(newObj);
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
