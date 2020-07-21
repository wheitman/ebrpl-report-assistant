export const report = {
  id: null,
  templateID: 'Branch Usage',
  title: null,
  coverageDate: null,
  submitDate: null,
  author: null,
  additionalInfo: null,
  pageStatuses: [
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
  ],
  pageCount: 5,
  completionStatus: 'incomplete',
};

export const pages = [
  {
    title: 'Start',
    number: 0,
    sections: [
      {
        title: 'Basic information',
        type: 'simple-input',
        meta: true,
        inputs: [
          {
            label: 'This report is for the month of:',
            type: 'month-select',
            value: null,
            links: ['coverageDate', 'title'],
          },
          {
            label: 'Additional info (optional):',
            type: 'textarea',
            value: null,
            links: ['additionalInfo'],
          },
        ],
      },
    ],
  },
  {
    title: 'Programs in the library',
    number: 1,
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
        value: [
          {
            row: [
              '20-Somethings',
              '07/07/2020',
              'Dating in Modern Times',
              22,
              { tags: [{ label: 'Digital lab program', icon: 'terminal' }] },
            ],
          },
          {
            row: [
              'Adults',
              '07/22/2020',
              'Wine Tasting Workshop',
              12,
              {
                tags: [
                  {
                    label: 'Subject related to Digital Literacy/Database Use',
                    icon: 'network-globe',
                  },
                ],
              },
            ],
          },
          {
            row: [
              'Adults',
              '07/31/2020',
              'Peppa Pig Playtime',
              33,
              {
                tags: [
                  {
                    label: 'Portable device (including iPads and laptops)',
                    icon: 'devices',
                  },
                ],
              },
            ],
          },
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
    number: 2,
    sections: [
      {
        title: 'Room Usage',
        type: 'datagrid',
        columns: [
          { label: 'Number of uses', type: 'number' },
          { label: 'Room', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [
          {
            row: [null, 'Group Study Room/Alternative Meeting Room', null],
          },
          { row: [null, 'Quiet Reading Room', null] },
          { row: [null, 'Teen Study Room', null] },
          { row: [null, "Children's Study Room", null] },
          { row: [null, 'Digital Lab', null] },
          { row: [null, 'Innovation Space', null] },
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
    number: 3,
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
        value: [
          { row: ['Book Clubs', null, null] },
          { row: ['Elementary', null, null] },
          { row: ['Middle school', null, null] },
          { row: ['High school', null, null] },
          { row: ['College', null, null] },
          { row: ['Other', null, null] },
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
        value: [
          { row: ['Elementary', null, null] },
          { row: ['Middle school', null, null] },
          { row: ['High school', null, null] },
          { row: ['College', null, null] },
          { row: ['Other', null, null] },
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
        title: 'Community meetings attended by staff representing the library',
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
    number: 4,
    sections: [
      {
        title: 'Volunteers',
        type: 'datagrid',
        columns: [
          { label: 'Category', type: 'text' },
          { label: '# of volunteers', type: 'number' },
          { label: 'Total hours worked', type: 'number' },
        ],
        value: [
          { row: ['Adult', null, null] },
          { row: ['Teen', null, null] },
          { row: ['Children', null, null] },
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
        value: [
          { row: [null, null, 'Coloring pages'] },
          { row: [null, null, 'Reading Dogs'] },
          { row: [null, null, 'Read to your bunny'] },
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
];
