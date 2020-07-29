import { ClrLoadingState } from '@clr/angular';
import { TemplateService } from './../../services/template.service';
import { ConstantService } from './../../services/constant.service';
import {
  SimpleInputInterface,
  DatagridInterface,
  SectionInterface,
  Input,
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
import {
  Component,
  OnInit,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Page } from 'src/app/interfaces/page';
import { first } from 'rxjs/operators';
import 'emoji-picker-element';
import { Observable } from 'rxjs';

import {
  report as outlineReport,
  pages as outlinePages,
} from 'src/assets/dev/outline';

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
  iconNames: string[];
  editSectionOpened: boolean = false;
  editPageOpened: boolean = false;
  saveTemplateOpen: boolean = false;
  emojiPickerOpened: boolean = false;
  originalTemplateName: string;
  saveLoadingStatus: ClrLoadingState = ClrLoadingState.DEFAULT;
  // sectionPropsForm: FormGroup = new FormGroup({
  //   title: new FormControl(),
  //   subtitle: new FormControl(),
  //   type: new FormControl(),
  //   columns: new FormControl(),
  //   inputs: new FormControl(),
  //   tags: new FormControl(),
  // });
  inputsForm: FormGroup = new FormGroup({
    array: new FormArray([]),
  });
  columnsForm: FormGroup = new FormGroup({
    array: new FormArray([]),
  });

  currentPage: Page;
  originalSectionIndex: number;
  sectionInEdit: Object;
  validMessage: string;
  constants$: Observable<Object>;
  divisions: Object[];
  hasMetaSection: boolean;
  metaSection: SimpleInputInterface;

  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _AngularFirestore: AngularFirestore,
    public _ConstantService: ConstantService,
    public _TS: TemplateService
  ) {}

  ngOnInit(): void {
    this.constants$ = this._ConstantService.constants;
    this._ActivatedRoute.queryParamMap.subscribe((paramMap) => {
      let openTitle = paramMap.get('open');
      //if an existing template has been passed to the URL
      if (openTitle) {
        this.openTemplate(openTitle)
          .then(() => {
            this.originalTemplateName = this._template.templateID;
            this.hasMetaSection = this.findMetaSection();
            console.log(this._template);
          })
          .catch(() => {});
      } else {
        this._template = {
          id: null,
          templateID: '',
          pageStatuses: [],
          pageCount: 0,
          completionStatus: 'incomplete',
          pages: [],
        };
        this.templateChanged();
      }
    });
    this.tempPropsGroup = new FormGroup({
      templateTitle: new FormControl(''),
    });

    this.tempPropsGroup.valueChanges.subscribe(() => {
      this.setTemplateTitle(this.tempPropsGroup.get('templateTitle').value);
    });
    // this.pushTemplateObjectToDB(outlineReport, outlinePages);
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
            this._TS.newTemplate();
            reject();
          }
        }, reject);
    });
  }

  pushTemplateObjectToDB(template: Report, pages: Page[]) {
    let templateDoc = this._AngularFirestore.doc(
      '/templates/' + template.templateID
    );
    templateDoc
      .set(template)
      .then(() => {
        let pageCollection = templateDoc.collection('pages');
        pages.forEach((page, index) => {
          console.log(page);
          pageCollection.doc(index.toString()).set(page);
        });
      })
      .catch((reason) => {
        console.log(reason);
      })
      .finally(() =>
        console.log('Template ' + template.templateID + ' pushed')
      );
  }

  setTemplateTitle(newTitle) {
    if (this._template) {
      this._template.title = newTitle;
      console.log('[Builder] Template title is now ' + newTitle);
    }
  }

  findMetaSection(): boolean {
    let hasMeta = false;
    this._template.pages.forEach((page) => {
      page.sections.forEach((section) => {
        console.log(section['type']);
        if (section['type'] === 'meta') {
          this.metaSection = section as SimpleInputInterface;
          hasMeta = true;
        }
      });
    });
    return hasMeta;
  }

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
      index: this._template.pages.length,
      sections: [],
    });
    console.log(this._template.pages.length);
  }

  setCurrentPage(index: number) {
    this.currentPage = this._template.pages[index];
  }

  get templateValid() {
    if (!this._template) {
      this.validMessage = 'Template is missing.';
      return false;
    } else if (
      !this._template.templateID ||
      this._template.templateID.length < 1
    ) {
      this.validMessage = 'Template title is missing.';
      return false;
    } else {
      this.validMessage = 'Ready to save.';
      return true;
    }
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

  getMagicText(): string {
    if (!this._template) {
      return 'No template open';
    }
    return JSON.stringify(this._template, null, 4);
  }

  getSectionsByType(pageIndex: number, type: string) {
    let sections: Object[] = [];
    let page = this._template.pages[pageIndex] as Page;
    page.sections.forEach((section) => {
      if (section['type'] === type) {
        sections.push(section);
      }
    });
    return sections;
  }

  addMetaSection(pageIndex) {
    if (this._template && this._template.pages) {
      let newSection: SimpleInputInterface = {
        title: 'Untitled',
        inputs: [],
        value: [],
        type: 'meta',
        index: this._template.pages[pageIndex].sections.length,
      };
      this._template.pages[pageIndex].sections.push(newSection);
      this.metaSection = newSection;
      this.hasMetaSection = true;
      console.log(
        'Meta added. Sections now: ' + this._template.pages[pageIndex].sections
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

  openSaveTemplate() {
    this.saveTemplateOpen = true;
  }

  cancelSaveTemplate() {
    this.saveTemplateOpen = false;
  }

  openEditSection(section: Object) {
    //deep copy the section
    this.sectionInEdit = JSON.parse(JSON.stringify(section));

    this.originalSectionIndex = this.sectionInEdit['index'];
    this.editSectionOpened = true;
  }

  openEditPage(page: Page) {
    this.editPageOpened = true;
    console.log('Opening page');
  }
  closeEditPage() {
    this.editPageOpened = false;
  }
  movePageUp() {
    let currentIndex = this.currentPage.index;
    this.movePage(currentIndex, currentIndex - 1);
    this.resetPageIndices();
  }
  movePageDown() {
    let currentIndex = this.currentPage.index;
    this.movePage(currentIndex, currentIndex + 1);
    this.resetPageIndices();
  }
  movePage(fromIndex: number, toIndex: number) {
    console.log('Moving to ' + toIndex);
    if (toIndex >= 0 && toIndex < this._template.pages.length) {
      let arr = this._template.pages;
      arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
    } else console.error("Can't move page. Out of bounds.");
  }

  linkChanged(input: Input, event) {
    if (input.link === 'title') {
      input.type = 'text';
    } else if (input.link === 'coverageDate') {
      input.type = 'month-select';
    } else if (input.link === 'additionalInfo') {
      input.type = 'textarea';
    } else if (input.link === 'subject') {
      input.type = 'text';
    } else if (input.link === 'tags') {
      input.type = 'tag-select';
      if (!input.tags) {
        input['tags'] = [];
      }
    }
  }

  resetPageIndices() {
    this._template.pages.forEach((page, index) => {
      page.index = index;
    });
  }

  resetSectionIndices() {
    this.currentPage.sections.forEach((section: SectionInterface, index) => {
      section.index = index;
    });
  }

  finishEditSection() {
    console.log(this.sectionInEdit);
    this.moveSection(this.originalSectionIndex, this.sectionInEdit['index']);
    this._template['pages'][this.currentPage.index]['sections'][
      this.sectionInEdit['index']
    ] = this.sectionInEdit;
    //now reevaluate the 'index' section properties
    this.currentPage.sections.forEach((section, index) => {
      section['index'] = index;
    });

    //we reload the preview area after each successful push
    let refreshTemp = this.currentPage;

    this.editSectionOpened = false;
  }

  finishEditPage() {
    this.editPageOpened = false;
  }

  isDatatype(colIndex: number, type: string) {
    if (
      this.sectionInEdit['columns'] &&
      this.sectionInEdit['columns'][colIndex]['type'] === type
    ) {
      return true;
    }
    if (
      this.sectionInEdit['inputs'] &&
      this.sectionInEdit['inputs'][colIndex]['type'] === type
    ) {
      return true;
    } else return false;
  }

  isEqual(a, b) {
    return a === b;
  }

  isSectionType(section, type) {
    if (!section) {
      return false;
    }
    return section['type'] === type;
  }
  isPlainDt(colIndex: number) {
    let type = this.sectionInEdit['columns'][colIndex]['type'];
    if (
      !(
        type === 'tag-select' ||
        type === 'date-select' ||
        type === 'month-select'
      )
    ) {
      return true;
    } else return false;
  }

  get tag() {
    return 'Hello';
  }

  toggleTag(rowIndex, colIndex, toggled: boolean, tag) {
    let cellTags: Object[] = this.sectionInEdit['value'][rowIndex]['row'][
      colIndex
    ]['tags'];
    if (toggled === true) {
      //add the tag to the section value
      cellTags.push(tag);
    } else {
      //remove the tag
      cellTags.forEach((tagJ, index) => {
        if (tag['label'] === tagJ['label']) {
          cellTags.splice(index, 1);
        }
      });
    }
    console.log(this.sectionInEdit);
  }

  renderDgCell(rowIndex: number, colIndex: number) {
    let cellVal = this.sectionInEdit['value'][rowIndex]['row'][colIndex];
    let type = this.sectionInEdit['columns'][colIndex]['type'];
    if (type === 'tag-select') {
      let emojis: string = '';
      (cellVal['tags'] as Object[]).forEach((tagObj) => {
        emojis = emojis + ' ' + tagObj['icon'];
      });
      return emojis;
    } else {
      return cellVal;
    }
  }

  // Array.prototype.move = function(from, to) {
  //   this.splice(to, 0, this.splice(from, 1)[0]);
  // };

  moveSection(fromIndex: number, toIndex: number) {
    console.log('Moving to ' + toIndex);
    if (toIndex >= 0 && toIndex < this.currentPage.sections.length) {
      let arr = this.currentPage.sections;
      arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
    } else console.error("Can't move section. Out of bounds.");
  }

  addColumn(event: Event) {
    event.stopPropagation();
    if (!this.sectionInEdit['columns']) {
      this.sectionInEdit['columns'] = [{ label: 'New column', type: 'text' }];
    } else {
      (this.sectionInEdit['columns'] as Object[]).push({
        label: 'New column',
        type: 'text',
      });
      (this.sectionInEdit['value'] as Object[]).forEach((row) => {
        (row['row'] as Object[]).push('');
      });
    }
  }

  clearPrefill() {
    if (this.sectionInEdit['value']) {
      this.sectionInEdit['value'] = [];
    }
  }

  deleteColumn(index: number) {
    //if prefill exists, clear it
    this.clearPrefill();
    console.log(this.sectionInEdit['columns']);
    (this.sectionInEdit['columns'] as Object[]).splice(index, 1);
    console.log(this.sectionInEdit['columns']);
  }
  deleteInput(index: number) {
    this.clearPrefill();
    (this.sectionInEdit['inputs'] as Object[]).splice(index, 1);
  }
  deleteSection(section) {
    if (
      confirm('Are you sure you want to delete "' + section['title'] + '"?')
    ) {
      this.currentPage.sections.splice(section['index'], 1);
      this.resetSectionIndices();
      console.log('Section @ ' + section['index'] + ' deleted.');
      this.cancelEditSection();
    }
  }

  addInput(event: Event) {
    event.stopPropagation();
    let inputs = this.sectionInEdit['inputs'] as Object[];
    if (!inputs) {
      inputs = [];
    }
    let val = this.sectionInEdit['value'] as Object[];
    if (!val) {
      val = [];
    }
    val.push(null);
    if (this.sectionInEdit['type'] === 'meta') {
      inputs.push({
        label: 'Untitled',
        type: 'text',
        link: 'coverageDate', //default link
        tags: [],
      });
    } else {
      inputs.push({
        label: 'Untitled',
        type: 'text',
        link: null, //default link
        tags: [],
      });
    }
  }

  hoverEnterPageSB(pageIndex) {
    this.pageHovers[pageIndex] = true;
  }
  hoverLeavePageSB(pageIndex) {
    this.pageHovers[pageIndex] = false;
  }

  hasTagSelect(object: Object): boolean {
    let hastg: boolean = false;
    if (object['inputs']) {
      (object['inputs'] as Object[]).forEach((input) => {
        if (input['type'] === 'tag-select') {
          hastg = true;
        }
      });
    } else if (object['columns']) {
      (object['columns'] as Object[]).forEach((col) => {
        if (col['type'] === 'tag-select') {
          hastg = true;
        }
      });
    }
    return hastg;
  }

  hasTag(rowIndex: number, colIndex: number, tag: Object) {
    let cellTags: Object[] = this.sectionInEdit['value'][rowIndex]['row'][
      colIndex
    ]['tags'];
    let cellIcons: string[] = [];
    cellTags.forEach((tag) => {
      cellIcons.push(tag['icon']);
    });

    let searchIcon = tag['icon'];
    return cellIcons.includes(searchIcon);
  }

  hasPrefill(object: Object): boolean {
    if (object['value'] && (object['value'] as Object[]).length > 0) {
      return true;
    } else return false;
  }

  addTag(input: Input, event: Event) {
    event.stopPropagation();
    console.log(input);
    input.tags.push({
      icon: '❓',
      label: 'Untitled',
    });
    console.log(input);
  }

  deleteTag(input: Input, index: number) {
    console.log(input.tags.splice(index, 1));
  }

  editTagEmoji(input: Input, tagIndex: number, eventData: CustomEvent) {
    console.log(tagIndex, eventData.detail);
    input.tags[tagIndex]['icon'] = eventData.detail['unicode'];
    console.log(this.sectionInEdit);
  }

  saveTemplate() {
    this.saveLoadingStatus = ClrLoadingState.LOADING;
    this._TS
      .saveTemplate(this._template)
      .then(() => {
        this.saveLoadingStatus = ClrLoadingState.SUCCESS;
        setTimeout(() => {
          this.saveTemplateOpen = false;
        }, 500);
        this._TS.openTemplate(this._template.templateID);
      })
      .catch((reason) => {
        console.error('Save failed: ' + reason);
        alert('Save failed: ' + reason);
        this.saveLoadingStatus = ClrLoadingState.ERROR;
      });
  }
}
