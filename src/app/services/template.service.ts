import { SimpleInputSection } from './../components/sections/simple-input/simple-input.component';
import { DatagridSection } from './../components/sections/datagrid-section/datagrid-section.component';
import { Page } from '../interfaces/page';
import { SectionInterface } from '../interfaces/sections';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractSection } from '../components/sections/abstract-section/abstract-section.component';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private foolishObj = {
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
                'Dating in Olden Times',
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
            rawRowValues: [
              [
                '20-Somethings',
                '07/07/2020',
                'Dating in Olden Times',
                22,
                [null, null, null, null, true, null],
              ],
              [
                'Adults',
                '07/22/2020',
                'Wine Tasting Workshop',
                12,
                [null, true, null, null, null, null],
              ],
              [
                'Adults',
                '07/31/2020',
                'Peppa Pig Playtime',
                33,
                [null, null, null, true, null, null],
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
            type: 'simple-input',
          },
          {
            title: 'Civic Groups and Organizations Using Meeting Rooms',
            type: 'simple-input',
          },
          {
            title: 'Impromptu Groups Meeting in the Library',
            subtitle:
              'Not involved in formal instruction or scheduled tours. Includes group homes, classes, and exam proctoring.',
            type: 'simple-input',
          },
        ],
      },
      {
        title: 'Staff presentations and events outside the library',
        sections: [
          {
            title: 'Speech or lecture',
            type: 'simple-input',
          },
          {
            title: 'Storytimes or other performances',
            type: 'simple-input',
          },
          {
            title: 'Booktalks',
            type: 'simple-input',
          },
          {
            title: 'Research talks',
            type: 'simple-input',
          },
          {
            title: 'Promotional events',
            type: 'simple-input',
          },
          {
            title:
              'Community meetings attended by staff representing the library',
            type: 'simple-input',
          },
          {
            title: 'Media presentations',
            subtitle: 'TV, radio, podcast, etc. Scheduled OR impromptu.',
            type: 'simple-input',
          },
        ],
      },
      {
        title: 'Other categories tracked',
        sections: [
          {
            title: 'Volunteers',
            type: 'simple-input',
          },
          {
            title: 'Outreach contacts to area businesses and organizations',
            type: 'simple-input',
          },
          {
            title: 'Displays and exhibits',
            subtitle: 'Not just for book displays',
            type: 'simple-input',
          },
          {
            title: 'Drive-thru window total',
            type: 'simple-input',
          },
          {
            title: 'Books and magazines read in-house',
            type: 'simple-input',
          },
          {
            title: 'Miscellaneous tracked items',
            type: 'simple-input',
          },
          {
            title: 'Training - in-house for staff',
            subtitle:
              'Including training via webinar or personal online training. Not including personal Ethics or Sexual Harassment Prevention Training.',
            type: 'simple-input',
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

  constructor() {}

  getTemplatePage(pageNumber: number): Observable<Page> {
    return new Observable<Page>((observer) => {
      let pageObj = this.foolishObj.pages[pageNumber - 1];
      let page: Page = {
        number: pageNumber,
        title: pageObj.title,
        subtitle: pageObj['subtitle'],
      };
      observer.next(page);
    });
  }

  getPageTitles(): string[] {
    let pageTitles: string[] = [];
    this.foolishObj.pages.forEach((page) => {
      pageTitles.push(page.title);
    });
    return pageTitles;
  }

  getPageSubtitles(): string[] {
    let pageSubtitles: string[] = [];
    this.foolishObj.pages.forEach((page) => {
      if (page['subtitle']) pageSubtitles.push(page['subtitle']);
      else pageSubtitles.push(undefined);
    });
    return pageSubtitles;
  }

  getConstant(constantName: string) {
    return this.foolishObj.contants[constantName];
  }

  getDatagrids(pageNumber: number): Observable<DatagridSection[]> {
    pageNumber--;
    return new Observable<DatagridSection[]>((observer) => {
      let sections = this.foolishObj.pages[pageNumber].sections;
      let datagrids: DatagridSection[] = [];
      sections.forEach((section, index) => {
        if (section.type == 'datagrid') {
          let datagrid: DatagridSection = new DatagridSection();
          datagrid.title = section.title || null;
          datagrid.subtitle = section.subtitle || null;
          datagrid.order = index;
          datagrid.templateObj = {
            section: section,
            constants: this.foolishObj.contants,
          };
          datagrids.push(datagrid);
        }
      });
      observer.next(datagrids);
    });
  }

  getSimpleInputs(pageNumber: number): Observable<SimpleInputSection[]> {
    pageNumber--;
    return new Observable<SimpleInputSection[]>((observer) => {
      let sections = this.foolishObj.pages[pageNumber].sections;
      let simpleInputs: SimpleInputSection[] = [];
      sections.forEach((section, index) => {
        if (section.type == 'simple-input') {
          let simpleInput: SimpleInputSection = new SimpleInputSection();
          simpleInput.title = section.title || null;
          simpleInput.subtitle = section.subtitle || null;
          simpleInput.order = index;
          simpleInput.templateObj = {
            section: section,
            constants: this.foolishObj.contants,
          };
          simpleInputs.push(simpleInput);
        }
      });
      observer.next(simpleInputs);
    });
  }

  getSectionCount(pageNumber: number) {
    return this.foolishObj.pages[pageNumber - 1].sections.length;
  }

  getTemplateConstant(constantLabel: string): Object {
    return this.foolishObj.contants[constantLabel];
  }

  getTemplateNames(): Observable<string[]> {
    return this.foolishTemplateNames;
  }

  setCurrentTemplate(fileName: string) {
    this.outlineFileName = fileName;
  }

  get pageCount() {
    return this.foolishObj.pages.length;
  }
}
