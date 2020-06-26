import { Injectable } from '@angular/core';

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
      },
    ],
  };

  outlineFileName = 'outline.json';

  constructor() {}

  getTemplatePage(pageNumber: number): Object {
    if (pageNumber > 0) return this.foolishObj.pages[pageNumber - 1];
    else return undefined;
  }

  getTemplateConstant(constantLabel: string): Object {
    return this.foolishObj.contants[constantLabel];
  }

  setOutlineName(fileName: string) {
    this.outlineFileName = fileName;
  }
}
