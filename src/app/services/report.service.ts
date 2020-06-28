import { Page } from './../interfaces/page';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractSection } from '../components/sections/abstract-section/abstract-section.component';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
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
            finePrint:
              'Presented or co-sponsored by the library. Includes story/crafts, LEGO storytime, Tax Assistance.',
            type: 'item-table',
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
          },
          {
            title: 'Computer classes',
          },
          {
            title: 'Book clubs',
          },
          {
            title: 'Tours',
          },
          {
            title: 'Demonstrations',
          },
          {
            title: 'Tutoring',
          },
          {
            title: 'Special education',
          },
        ],
      },
      {
        title: 'Other library events',
        sections: [
          {
            title: 'Room Usage',
          },
          {
            title: 'Civic Groups and Organizations Using Meeting Rooms',
          },
          {
            title: 'Impromptu Groups Meeting in the Library',
            finePrint:
              'Not involved in formal instruction or scheduled tours. Includes group homes, classes, and exam proctoring.',
          },
        ],
      },
      {
        title: 'Staff presentations and events outside the library',
        sections: [
          {
            title: 'Speech or lecture',
          },
          {
            title: 'Storytimes or other performances',
          },
          {
            title: 'Booktalks',
          },
          {
            title: 'Research talks',
          },
          {
            title: 'Promotional events',
          },
          {
            title:
              'Community meetings attended by staff representing the library',
          },
          {
            title: 'Media presentations',
            finePrint: 'TV, radio, podcast, etc. Scheduled OR impromptu.',
          },
        ],
      },
      {
        title: 'Other categories tracked',
        sections: [
          {
            title: 'Volunteers',
          },
          {
            title: 'Outreach contacts to area businesses and organizations',
          },
          {
            title: 'Displays and exhibits',
            finePrint: 'Not just for book displays',
          },
          {
            title: 'Drive-thru window total',
          },
          {
            title: 'Books and magazines read in-house',
          },
          {
            title: 'Miscellaneous tracked items',
          },
          {
            title: 'Training - in-house for staff',
            finePrint:
              'Including training via webinar or personal online training. Not including personal Ethics or Sexual Harassment Prevention Training.',
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

  private sectionObjectToArray(sectionObj: Object[]) {
    let sectionArray: AbstractSection[] = [];
    sectionObj.forEach((section) => {
      sectionArray.push(
        new AbstractSection(section['title'], section['subtitle'] || null)
      );
    });
    return sectionArray;
  }

  getTemplatePage(pageNumber: number): Observable<Page> {
    return new Observable<Page>((observer) => {
      let pageObj = this.foolishObj.pages[pageNumber - 1];
      let page: Page = {
        number: pageNumber,
        title: pageObj.title,
        subtitle: pageObj['subtitle'],
        sections: this.sectionObjectToArray(pageObj.sections),
      };
      observer.next(page);
    });
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
