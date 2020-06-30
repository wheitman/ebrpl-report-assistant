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
              { label: 'STEM/STEAM', icon: 'oi-beaker' },
              {
                label: 'Subject related to Digital Literacy/Database Use',
                icon: 'oi-list-rich',
              },
              {
                label: 'Subject related to Health and Wellness',
                icon: 'oi-heart',
              },
              {
                label: 'Portable device (including iPads and laptops)',
                icon: 'oi-phone',
              },
              { label: 'Digital lab program', icon: 'oi-code' },
              { label: 'Innovation/Maker Space', icon: 'oi-lightbulb' },
            ],
          },
          {
            title: 'Storytimes',
            type: 'simple-input',
          },
          {
            title: 'Computer classes',
            type: 'datagrid',
          },
          {
            title: 'Book clubs',
            type: 'datagrid',
          },
          {
            title: 'Tours',
            type: 'datagrid',
          },
          {
            title: 'Demonstrations',
            type: 'datagrid',
          },
          {
            title: 'Tutoring',
            type: 'datagrid',
          },
          {
            title: 'Special education',
            type: 'datagrid',
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

  getDatagrids(pageNumber: number): Observable<DatagridSection[]> {
    pageNumber--;
    return new Observable<DatagridSection[]>((observer) => {
      let sections = this.foolishObj.pages[pageNumber].sections;
      let datagrids: DatagridSection[] = [];
      sections.forEach((section) => {
        if (section.type == 'datagrid') {
          let datagrid: DatagridSection = new DatagridSection();
          datagrid.title = section.title || null;
          datagrid.subtitle = section.subtitle || null;
          datagrid.templateObj = section;
          console.log(section['columns']);
          datagrids.push(datagrid);
        }
      });
      observer.next(datagrids);
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
