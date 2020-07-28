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
    index: 0,
    sections: [
      {
        index: 0,
        title: 'Basic information',
        type: 'meta',
        inputs: [
          {
            label: 'This report is for the month of:',
            type: 'month-select',
            link: 'coverageDate',
          },
          {
            label: 'Additional info (optional):',
            type: 'textarea',
            link: 'additionalInfo',
          },
        ],
        value: [null, null],
      },
    ],
  },
  {
    title: 'Programs in the library',
    index: 1,
    sections: [
      {
        title: 'Regular programs',
        index: 0,
        subtitle:
          'Presented or co-sponsored by the library. Includes story/crafts, LEGO storytime, Tax Assistance.',
        type: 'datagrid',
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
          {
            label: 'Tags',
            type: 'tag-select',
            tags: [
              { label: 'STEM/STEAM', icon: '🔬' },
              {
                label: 'Subject related to Digital Literacy/Database Use',
                icon: '🌐',
              },
              {
                label: 'Subject related to Health and Wellness',
                icon: '⚕️',
              },
              {
                label: 'Portable device (including iPads and laptops)',
                icon: '💻',
              },
              { label: 'Digital lab program', icon: '👨‍💻' },
              { label: 'Innovation/Maker Space', icon: '🚀' },
            ],
          },
        ],

        value: [
          {
            row: [
              '20-Somethings',
              '07/07/2020',
              'Dating in Modern Times',
              22,
              { tags: [{ label: 'Digital lab program', icon: '👨‍💻' }] },
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
                    icon: '🌐',
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
                    icon: '💻',
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
        index: 1,
        inputs: [
          { label: 'Number of programs', type: 'number' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [null, null],
      },
      {
        title: 'Computer classes',
        subtitle:
          'Includes teaching or using computer applications, digital literacy, etc.',
        type: 'datagrid',
        index: 2,
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
          { label: 'Hours', type: 'number' },
          {
            label: 'Tags',
            type: 'tag-select',
            tags: [
              {
                label: 'Portable device (including iPads and laptops)',
                icon: '💻',
              },
              { label: 'Digital lab program', icon: '👨‍💻' },
              { label: 'Innovation/Maker Space', icon: '🚀' },
            ],
          },
        ],

        value: [],
      },
      {
        title: 'Book clubs',
        subtitle: 'Held in the library, sponsored by the library',
        type: 'datagrid',
        index: 3,
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Club/title or topic', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
      {
        title: 'Tours',
        type: 'datagrid',
        index: 4,
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Group and topic (if any)', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
      {
        title: 'Demonstrations',
        type: 'datagrid',
        index: 5,
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
      {
        title: 'Tutoring',
        index: 6,
        subtitle:
          'Takes place in the library, but not organized or taught by the library',
        type: 'datagrid',
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Number of sessions', type: 'number' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
      {
        title: 'Special education',
        subtitle:
          "Occupational instruction classes 'working' for you or group home visiting the library. Not a formal tour.",
        type: 'datagrid',
        index: 7,
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Number of sessesions', type: 'number' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
    ],
  },
  {
    title: 'Other library events',
    index: 2,
    sections: [
      {
        title: 'Room Usage',
        type: 'datagrid',
        index: 0,
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
        index: 1,
        inputs: [
          { label: 'Number of groups', type: 'number' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [null, null],
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
        value: [],
      },
    ],
  },
  {
    title: 'Staff presentations and events outside the library',
    index: 3,
    sections: [
      {
        title: 'Speech or lecture',
        index: 0,
        type: 'datagrid',
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
      {
        title: 'Storytimes or other performances',
        index: 1,
        type: 'datagrid',
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
      {
        title: 'Booktalks',
        type: 'datagrid',
        index: 2,
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
        index: 3,
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
        index: 4,
        columns: [
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
      },
      {
        title: 'Community meetings attended by staff representing the library',
        type: 'datagrid',
        index: 5,
        columns: [
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
      {
        title: 'Media presentations',
        type: 'datagrid',
        index: 6,
        columns: [
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
        ],
        value: [],
      },
    ],
  },
  {
    title: 'Other categories tracked',
    index: 4,
    sections: [
      {
        title: 'Volunteers',
        type: 'datagrid',
        index: 0,
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
        index: 1,
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
        index: 2,
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Title', type: 'text' },
        ],
      },
      {
        title: 'Drive-thru window total',
        type: 'simple-input',
        index: 3,
        inputs: [{ label: 'Total', type: 'number' }],
      },
      {
        title: 'Books and magazines read in-house',
        type: 'simple-input',
        index: 4,
        inputs: [
          { label: '# of books', type: 'number' },
          { label: '# of magazines', type: 'number' },
        ],
      },
      {
        title: 'Miscellaneous tracked items',
        type: 'datagrid',
        index: 5,
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
        index: 6,
        columns: [
          { label: 'Division', type: 'division-select' },
          { label: 'Date', type: 'date-select' },
          { label: 'Title', type: 'text' },
          { label: 'Attendance', type: 'number' },
          { label: 'Hours', type: 'number' },
          {
            label: 'Tags',
            type: 'tag-select',
            tags: [
              {
                label: 'Portable device (including iPads and laptops)',
                icon: '💻',
              },
              { label: 'Digital lab program', icon: '👨‍💻' },
              { label: 'Innovation/Maker Space', icon: '🚀' },
            ],
          },
        ],
      },
    ],
  },
];
