import { Page } from './../interfaces/page';
import { UnifiedReport } from './../interfaces/report';
import { UserService } from './user.service';
import { Report } from 'src/app/interfaces/report';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private _templateNames: string[];
  private templates$: BehaviorSubject<Map<string, Report>>;
  private _templates: Map<string, Report>;

  outlineFileName;

  constructor(
    public _AngularFirestore: AngularFirestore,
    private _Router: Router,
    private _UserServ: UserService
  ) {
    this._templateNames = [];
    this._templates = new Map();
    this.templates$ = new BehaviorSubject<Map<string, Report>>(this._templates);
    _AngularFirestore
      .collection('templates')
      .get()
      .subscribe((snapshot) => {
        snapshot.forEach((doc) => {
          this._templates.set(doc.id, doc.data() as Report);
          this._templateNames.push(doc.id);
        });
        this.templates$.next(this._templates);
      });
    this._UserServ.getUserObservable().subscribe((user) => {
      console.log('[Template Serv] User changed, refreshing template list');
      this.refreshTemplateList();
    });
  }

  refreshTemplateList() {
    this._AngularFirestore
      .collection('templates')
      .get()
      .pipe(first())
      .subscribe((snapshot) => {
        this._templateNames = [];
        this._templates.clear();
        snapshot.forEach((doc) => {
          this._templates.set(doc.id, doc.data() as Report);
          this._templateNames.push(doc.id);
        });
        console.log(this._templateNames);
        this.templates$.next(this._templates);
      });
  }

  get templateNames() {
    return this._templateNames;
  }

  get visibleTemplates(): Report[] {
    let templates: Report[] = [];
    this._templates.forEach((val, key, map) => {
      if (!val.hidden) {
        templates.push(val);
      }
    });
    return templates;
  }

  get templateObservable() {
    return this.templates$.asObservable();
  }

  get templateSnapshot() {
    return this._templates;
  }

  markHidden(templateID: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let doc = this._AngularFirestore.doc<Report>('/templates/' + templateID);
      doc.get().subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          doc.update({ hidden: true }).then(() => {
            let oldTemplate = this._templates.get(templateID);
            oldTemplate.hidden = true;
            this._templates.set(templateID, oldTemplate);
            resolve();
          }, reject);
        } else {
          console.error(
            'Cannot mark ' + templateID + ' as hidden. Template does not exist.'
          );
          reject();
        }
      });
    });
  }

  markVisible(templateID: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let doc = this._AngularFirestore.doc<Report>('/templates/' + templateID);
      doc.get().subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          doc.update({ hidden: false }).then(() => {
            let oldTemplate = this._templates.get(templateID);
            oldTemplate.hidden = false;
            this._templates.set(templateID, oldTemplate);
            resolve();
          }, reject);
        } else {
          console.error(
            'Cannot mark ' +
              templateID +
              ' as visible. Template does not exist.'
          );
          reject();
        }
      });
    });
  }

  openTemplate(templateID: string) {
    console.log('[Template Serv] Opening ' + templateID);
    this._Router.navigate(['builder'], { queryParams: { open: templateID } });
  }
  duplicateTemplate(templateID: string, newTemplateID: string): Promise<void> {
    console.log('[Template Serv] Duplicating ' + templateID);

    return new Promise<void>((resolve, reject) => {
      //grab old template from database
      this._AngularFirestore
        .doc<Report>('/templates/' + templateID)
        .valueChanges()
        .pipe(first())
        .subscribe((template) => {
          let newTemplate = template;
          //reset templateID, id
          newTemplate.templateID = newTemplateID;
          newTemplate.id = '';
          //save new template to database
          this._AngularFirestore
            .doc('/templates/' + newTemplateID)
            .set(newTemplate)
            .then(() => {
              console.log('Template duplicated successfully.');
              resolve();
            }, reject);
        }, reject);
    });
  }
  deleteTemplate(templateID: string): Promise<void> {
    console.log('[Template Serv] Deleting ' + templateID);
    return new Promise<void>((resolve, reject) => {
      let templateDoc = this._AngularFirestore.doc('/templates/' + templateID);
      let template = this._templates.get(templateID);
      if (!template) {
        reject();
      } else {
        //delete all pages
        for (let i = 0; i < template.pageCount; i++) {
          let pageDoc = templateDoc.collection('pages').doc(i.toString());
          pageDoc.delete();
        }

        templateDoc.delete().then(() => {
          this.refreshTemplateList();
          console.log('Deleted ' + templateDoc.ref.path);
          resolve();
        }, reject);
      }
    });
  }
  newTemplate() {
    console.log('[Template Serv] Opening fresh template');
    this._Router.navigate(['builder']);
  }
  saveTemplate(template: UnifiedReport): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      console.log(
        '[Template Serv] Saving template ' + template.templateID + '...'
      );
      let templateHeader: Report = {
        id: template.id,
        templateID: template.templateID,
        pageCount: template.pageCount,
        pageStatuses: template.pageStatuses,
        completionStatus: template.completionStatus,
      };
      this._AngularFirestore
        .doc<Report>('/templates/' + template.templateID)
        .set(templateHeader)
        .then(() => {
          let pagePromises: Promise<void>[] = [];
          template.pages.forEach((page) => {
            pagePromises.push(
              this._AngularFirestore
                .doc<Page>(
                  '/templates/' +
                    template.templateID +
                    '/pages/' +
                    page.index.toString()
                )
                .set(page)
            );
          });
          Promise.all(pagePromises).then(() => {
            console.log('[Template Serv] Template saved.');
            resolve();
          }, reject);
        }, reject);
    });
  }
  markTemplateHidden(templateID: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {});
  }
}
