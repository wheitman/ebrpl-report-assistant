import { Report } from 'src/app/interfaces/report';
import { SimpleInputInterface } from './../interfaces/sections';
import { SimpleInputSection } from './../components/sections/simple-input/simple-input.component';
import { DatagridSection } from './../components/sections/datagrid-section/datagrid-section.component';
import { Page } from '../interfaces/page';
import { SectionInterface } from '../interfaces/sections';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractSection } from '../components/sections/abstract-section/abstract-section.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private _templateNames: string[];

  private static foolishObj = {
    contants: {
      divisions: [
        { label: 'Adults', code: 'AD' },
        { label: '20-Somethings', code: '20' },
        { label: 'Teens', code: 'TD' },
        { label: 'Children', code: 'CR' },
      ],
      branches: [
        {
          name: 'Main',
        },
        {
          name: 'Baker',
        },
        {
          name: 'Bluebonnet',
        },
        {
          name: 'Carver',
        },
        {
          name: 'Central',
        },
        {
          name: 'Delmont Gardens',
        },
        {
          name: 'Eden Park',
        },
        {
          name: 'Fairwood',
        },
        {
          name: 'Greenwell Springs Rd.',
        },
        {
          name: 'Jones Creek',
        },
        {
          name: 'Pride-Chaneyville',
        },
        {
          name: 'River Center',
        },
        {
          name: 'Scotlandville',
        },
        {
          name: 'Zachary',
        },
      ],
    },
    'meta-section': {
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
        sections: [
          {
            title: 'Regular programs',
            subtitle:
              'Presented or co-sponsored by the library. Includes story/crafts, LEGO storytime, Tax Assistance.',
            type: 'datagrid',
            columns: [
              { label: 'Division', type: 'division-select' },
              { label: 'Date', type: 'date-select' },
              { label: 'Title', type: 'text' },
              { label: 'Attendance', type: 'number' },
              { label: 'Tags', type: 'tag-select' },
            ],
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
          },
          {
            title: 'Storytimes',
            type: 'simple-input',
            inputs: [
              { label: 'Number of programs', type: 'number' },
              { label: 'Attendance', type: 'number' },
            ],
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
          },
          {
            title: 'Book clubs',
            subtitle: 'Held in the library, sponsored by the library',
            type: 'datagrid',
            columns: [
              { label: 'Division', type: 'division-select' },
              { label: 'Date', type: 'date-select' },
              { label: 'Club/title or topic', type: 'text' },
              { label: 'Attendance', type: 'number' },
            ],
          },
          {
            title: 'Tours',
            type: 'datagrid',
            columns: [
              { label: 'Division', type: 'division-select' },
              { label: 'Date', type: 'date-select' },
              { label: 'Group and topic (if any)', type: 'text' },
              { label: 'Attendance', type: 'number' },
            ],
          },
          {
            title: 'Demonstrations',
            type: 'datagrid',
            columns: [
              { label: 'Division', type: 'division-select' },
              { label: 'Date', type: 'date-select' },
              { label: 'Title', type: 'text' },
              { label: 'Attendance', type: 'number' },
            ],
          },
          {
            title: 'Tutoring',
            subtitle:
              'Takes place in the library, but not organized or taught by the library',
            type: 'datagrid',
            columns: [
              { label: 'Division', type: 'division-select' },
              { label: 'Number of sessions', type: 'number' },
              { label: 'Attendance', type: 'number' },
            ],
          },
          {
            title: 'Special education',
            subtitle:
              "Occupational instruction classes 'working' for you or group home visiting the library. Not a formal tour.",
            type: 'datagrid',
            columns: [
              { label: 'Division', type: 'division-select' },
              { label: 'Number of sessesions', type: 'number' },
              { label: 'Attendance', type: 'number' },
            ],
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
          },
          {
            title: 'Media presentations',
            type: 'datagrid',
            columns: [
              { label: 'Date', type: 'date-select' },
              { label: 'Title', type: 'text' },
              { label: 'Attendance', type: 'number' },
            ],
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
          },
          {
            title: 'Displays and exhibits',
            subtitle: 'Not just for book displays',
            type: 'datagrid',
            columns: [
              { label: 'Division', type: 'division-select' },
              { label: 'Title', type: 'text' },
            ],
          },
          {
            title: 'Drive-thru window total',
            type: 'simple-input',
            inputs: [{ label: 'Total', type: 'number' }],
          },
          {
            title: 'Books and magazines read in-house',
            type: 'simple-input',
            inputs: [
              { label: '# of books', type: 'number' },
              { label: '# of magazines', type: 'number' },
            ],
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
          },
        ],
      },
    ],
  };

  outlineFileName;
  private foolishTemplateNames: Observable<string[]> = new Observable(
    (observer) => {
      let names: string[] = ['Branch Usage'];
      observer.next(names);
    }
  );

  constructor(public _AngularFirestore: AngularFirestore) {
    this._templateNames = [];
    _AngularFirestore
      .collection('templates')
      .get()
      .subscribe((snapshot) => {
        snapshot.forEach((doc) => {
          this._templateNames.push(doc.id);
        });
      });
  }

  get templateNames() {
    return this._templateNames;
  }

  getStart(): Observable<SimpleInputSection> {
    let startObj = TemplateService.foolishObj['meta-section'];
    return new Observable<SimpleInputSection>((observer) => {
      let simpleInput: SimpleInputSection = new SimpleInputSection();
      simpleInput.title = startObj.title || null;
      simpleInput.subtitle = startObj['subtitle'] || null;
      (simpleInput.interface as SimpleInputInterface) = {
        title: startObj['title'] || null,
        type: startObj['type'] || null,
        value: [],
        index: 0,
        tags: startObj['tags'] || null,
        inputs: startObj['inputs'],
      };
      observer.next(simpleInput);
    });
  }

  getTemplatePage(pageNumber: number): Observable<Page> {
    return new Observable<Page>((observer) => {
      let pageObj = TemplateService.foolishObj.pages[pageNumber - 1];
      let page: Page = {
        number: pageNumber,
        title: pageObj.title,
        subtitle: pageObj['subtitle'],
        sections: undefined,
      };
      observer.next(page);
    });
  }

  getPageTitles(): string[] {
    let pageTitles: string[] = [];
    TemplateService.foolishObj.pages.forEach((page) => {
      pageTitles.push(page.title);
    });
    return pageTitles;
  }

  getPageSubtitles(): string[] {
    let pageSubtitles: string[] = [];
    TemplateService.foolishObj.pages.forEach((page) => {
      if (page['subtitle']) pageSubtitles.push(page['subtitle']);
      else pageSubtitles.push(undefined);
    });
    return pageSubtitles;
  }

  static getConstant(constantName: string) {
    return TemplateService.foolishObj.contants[constantName];
  }

  static getConstants() {
    return TemplateService.foolishObj.contants;
  }

  getSimpleInputs(pageNumber: number): Observable<SimpleInputSection[]> {
    pageNumber--;
    return new Observable<SimpleInputSection[]>((observer) => {
      let sections = TemplateService.foolishObj.pages[pageNumber].sections;
      let simpleInputs: SimpleInputSection[] = [];
      sections.forEach((section, index) => {
        if (section.type == 'simple-input') {
          let simpleInput: SimpleInputSection = new SimpleInputSection();
          simpleInput.title = section.title || null;
          simpleInput.subtitle = section.subtitle || null;
          simpleInput.order = index;
          simpleInput.interface = section;
          simpleInput.inputs = section['inputs'];
          simpleInputs.push(simpleInput);
        }
      });
      observer.next(simpleInputs);
    });
  }

  getSectionCount(pageNumber: number) {
    return TemplateService.foolishObj.pages[pageNumber - 1].sections.length;
  }

  getTemplateConstant(constantLabel: string): Object {
    return TemplateService.foolishObj.contants[constantLabel];
  }

  getTemplateNames(): Observable<string[]> {
    return this.foolishTemplateNames;
  }

  setCurrentTemplate(fileName: string) {
    this.outlineFileName = fileName;
  }

  get pageCount() {
    return TemplateService.foolishObj.pages.length;
  }

  static getTemplatePageCount(templateID: string) {
    return 4;
  }

  pushTemplateObjectToDB(template: Report, pages: Page[]) {
    let templateDoc = this._AngularFirestore.doc(
      '/templates/' + template.templateID
    );
    templateDoc.set(template).then(() => {
      let pageCollection = templateDoc.collection('pages');
      pages.forEach((page, index) => {
        pageCollection.doc(index.toString()).set(page);
      });
    });
  }
}
