import {
  SimpleInputInterface,
  DatagridInterface,
} from './../../interfaces/sections';
import { Report } from 'src/app/interfaces/report';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { UnifiedReport } from './../../interfaces/report';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/interfaces/page';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements OnInit {
  _template: UnifiedReport;

  tempPropsGroup: FormGroup;
  pageExpansions: boolean[];
  pageHovers: boolean[];
  sectionHovers: boolean[][];
  editSectionOpened: boolean = false;
  sectionPropsForm: FormGroup = new FormGroup({
    title: new FormControl(),
    subtitle: new FormControl(),
    type: new FormControl(),
    columns: new FormControl(),
    inputs: new FormControl(),
    tags: new FormControl(),
  });
  inputsForm: FormGroup = new FormGroup({
    array: new FormArray([]),
  });
  columnsForm: FormGroup = new FormGroup({
    array: new FormArray([]),
  });

  currentPage: Page;
  selectedSection: Object;
  templateValid: boolean;
  validMessage: string;

  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _AngularFirestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.queryParamMap.subscribe((paramMap) => {
      let openTitle = paramMap.get('open');
      //if an existing template has been passed to the URL
      if (openTitle) {
        this.openTemplate(openTitle).then(() => {
          console.log(this._template);
        });
      }
    });
    this.templateValid = this.getValidity();
    this.tempPropsGroup = new FormGroup({
      templateTitle: new FormControl(''),
    });

    this.tempPropsGroup.valueChanges.subscribe(() => {
      this.setTemplateTitle(this.tempPropsGroup.get('templateTitle').value);
    });
  }

  openTemplate(templateID: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      console.log('[Builder] Opening ' + templateID + '...');
      let templateDoc = this._AngularFirestore.doc<Report>(
        '/templates/' + templateID
      );

      templateDoc
        .get()
        .pipe(first())
        .subscribe((docSnapshot) => {
          if (docSnapshot.exists) {
            let templateHeader: Report = docSnapshot.data() as Report;
            let promises: Promise<void>[] = [];
            //get all pages stored in subcollection
            let templatePages: Page[] = [];
            for (let i = 0; i < templateHeader.pageCount; i++) {
              promises.push(
                new Promise<void>((resolve, reject) => {
                  let pageDoc = templateDoc
                    .collection('pages')
                    .doc<Page>(i.toString());
                  pageDoc
                    .valueChanges()
                    .pipe(first())
                    .subscribe((page) => {
                      templatePages.push(page);
                      resolve();
                    }, reject);
                })
              );
            }
            Promise.all(promises).then(
              () => {
                this._template = {
                  id: null,
                  templateID: templateHeader.templateID,
                  pageStatuses: templateHeader.pageStatuses,
                  pageCount: templateHeader.pageCount,
                  completionStatus: templateHeader.completionStatus,
                  pages: templatePages,
                };
                this.templateChanged();
                resolve();
              },
              () => {
                reject();
              }
            );
          } else {
            console.warn(
              'Template ' +
                templateID +
                ' does not exist. Setting to empty template instead.'
            );
            this.createTemplate(templateID);
            reject();
          }
        }, reject);
    });
  }

  setTemplateTitle(newTitle) {
    if (this._template) {
      this._template.title = newTitle;
      console.log('[Builder] Template title is now ' + newTitle);
    }
  }

  createTemplate(templateID: string) {}

  templateChanged() {
    this.updateSidebar();
  }

  updateSidebar() {
    if (this._template) {
      this.pageExpansions = [];
      this.pageHovers = [];
      this.sectionHovers = [[]];
      this._template.pages.forEach((page, index) => {
        this.pageExpansions.push(false);
        this.pageHovers.push(false);
        let sections: boolean[] = [];
        page.sections.forEach(() => {
          sections.push(false);
        });
        this.sectionHovers.push(sections);
      });
      console.log(this.sectionHovers);
    }
  }

  addPage() {
    this._template.pages.push({
      title: 'Untitled page',
      number: this._template.pages.length,
      sections: [],
    });
    console.log(this._template.pages.length);
  }

  setCurrentPage(index: number) {
    this.currentPage = this._template.pages[index];
    console.log(this.currentPage);
  }

  getValidity(): boolean {
    this.validMessage = 'Missing required components.';
    return false;
  }
  get pagesEmpty() {
    if (
      !this._template ||
      !this._template.pages ||
      this._template.pages.length < 1
    ) {
      return true;
    } else return false;
  }

  isDatagrid(section: Object) {
    if (!section || section['type'] !== 'datagrid') {
      return false;
    } else return true;
  }
  isSimpleInput(section: Object) {
    if (!section || section['type'] !== 'simple-input') {
      return false;
    } else return true;
  }
  hasInputs(section: Object) {
    if (
      !section ||
      section['type'] !== 'simple-input' ||
      !section['inputs'] ||
      section['inputs'].length < 1
    ) {
      return false;
    } else return true;
  }

  getDatagrids(pageIndex) {
    let datagrids: Object[] = [];
    if (this._template && this._template.pages) {
      this._template.pages[pageIndex].sections.forEach((section) => {
        if (section['type'] === 'datagrid') {
          datagrids.push(section);
        }
      });
    }
    return datagrids;
  }

  addDatagrid(pageIndex) {
    if (this._template && this._template.pages) {
      let newSection: DatagridInterface = {
        title: 'Untitled',
        columns: [],
        value: [],
        type: 'datagrid',
        index: this._template.pages[pageIndex].sections.length,
      };
      this._template.pages[pageIndex].sections.push(newSection);
      console.log(
        'Datagrid added. Sections now: ' +
          this._template.pages[pageIndex].sections
      );
    }
  }

  getSimpleInputs(pageIndex) {
    let simpleInputs: Object[] = [];
    if (this._template && this._template.pages) {
      this._template.pages[pageIndex].sections.forEach((section) => {
        if (section['type'] === 'simple-input') {
          simpleInputs.push(section);
        }
      });
    }
    return simpleInputs;
  }

  addSimpleInput(pageIndex) {
    if (this._template && this._template.pages) {
      let newSection: SimpleInputInterface = {
        title: 'Untitled',
        inputs: [],
        value: [],
        type: 'simple-input',
        index: this._template.pages[pageIndex].sections.length,
      };
      this._template.pages[pageIndex].sections.push(newSection);
      console.log(
        'SimpleInput added. Sections now: ' +
          this._template.pages[pageIndex].sections
      );
    }
  }

  setSection(section: Object, data: Object) {}
  cancelEditSection() {
    this.editSectionOpened = false;
  }

  openEditSection(section: Object) {
    this.selectedSection = section;
    if (section['type'] === 'datagrid') {
    }
    this.editSectionOpened = true;
  }

  addInput() {
    (this.selectedSection['inputs'] as Object[]).push({
      label: '',
      type: 'text',
      value: null,
      links: [],
    });
  }

  hoverEnterPageSB(pageIndex) {
    this.pageHovers[pageIndex] = true;
  }
  hoverLeavePageSB(pageIndex) {
    this.pageHovers[pageIndex] = false;
  }
}
