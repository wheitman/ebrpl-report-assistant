import { UnifiedReport } from './../interfaces/report';
import { UserService } from 'src/app/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Report } from 'src/app/interfaces/report';
import {
  BehaviorSubject,
  range,
  Observable,
  Subscription,
  combineLatest,
} from 'rxjs';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/interfaces/page';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private report$: BehaviorSubject<Report>;
  private _report: Report;
  private page$: BehaviorSubject<Page>;
  private _page: Page;
  constructor(
    private _AngularFirestore: AngularFirestore,
    private _Router: Router,
    private _UserService: UserService
  ) {
    this.report$ = new BehaviorSubject<Report>(this._report); //undefined
    this.page$ = new BehaviorSubject<Page>(this._page); //undefined
  }

  openReport(reportID: string, startPage: number = 0): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let reportDoc = this._AngularFirestore.doc<Report>(
        '/reports/' + reportID
      );
      //grab the requested
      reportDoc
        .valueChanges()
        .pipe(first())
        .subscribe((report) => {
          this._report = report;
          this.report$.next(report);
          if (this._report === undefined) {
            console.error(
              '[Report Serv] Report ' + reportID + ' does not exist.'
            );
            reject();
          } else {
            reportDoc
              .collection('pages')
              .doc<Page>(startPage.toString())
              .valueChanges()
              .pipe(first())
              .subscribe((page: Page) => {
                this._page = page;
                this.page$.next(page);
                console.log(this._page);
                console.log(
                  '[Report Serv] Report and page successfully opened.'
                );
                resolve();
              });
          }
        });
    });
  }

  generateReportID(
    checkUniqueness = true,
    length = 4,
    override?: string
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
      let result = '';
      //randomly generate a string if one isn't provided
      if (!navigator.onLine) {
        reject('offline');
      } else if (override) {
        result = override;
      } else {
        for (let i = length; i > 0; --i) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      //if enabled, check the uniqueness with the remote database
      if (checkUniqueness) {
        let reportCollection = this._AngularFirestore.collection(
          '/reports',
          (ref) => ref.where('id', '==', result)
        );
        reportCollection
          .valueChanges()
          .pipe(first())
          .subscribe((observer) => {
            if (observer.length > 0) {
              console.warn(
                '[Report Serv] Generated ID is not unique. Retrying...'
              );
              this.generateReportID().then((result) => resolve(result));
            } else resolve(result);
          });
      } else resolve(result);
    });
  }

  createNewReport(templateID: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!navigator.onLine) {
        reject();
      } else {
        let templateReport: Report;
        let templateDoc = this._AngularFirestore.doc<Report>(
          '/templates/' + templateID
        );
        templateDoc
          .get()
          .pipe(first())
          .subscribe(
            (report) => {
              templateReport = report.data() as Report;
              this.generateReportID().then((newReportID) => {
                let reportDoc = this._AngularFirestore.doc<Report>(
                  '/reports/' + newReportID
                );
                templateReport.id = newReportID;
                templateReport.author = this._UserService.getUserSnapshot().email;
                templateReport.branch = this._UserService.getUserSnapshot().branch;
                reportDoc.set(templateReport).then(
                  //create the pages in a collection
                  () => {
                    let pageCopyPromises: Promise<void>[] = [];
                    templateReport.pageStatuses.forEach((status, index) => {
                      let copyPromise = new Promise<void>((resolve, reject) => {
                        let fromDoc = templateDoc
                          .collection('pages')
                          .doc<Page>(index.toString());
                        fromDoc
                          .valueChanges()
                          .pipe(first())
                          .subscribe((page) => {
                            let toDoc = reportDoc
                              .collection('pages')
                              .doc(index.toString());
                            console.log(page);
                            toDoc.set(page).then(resolve).catch(reject);
                          }, reject);
                      });
                      pageCopyPromises.push(copyPromise);
                    });
                    //once all pages are copied, resolve with the new ID.
                    Promise.all(pageCopyPromises).then(() =>
                      resolve(newReportID)
                    );
                  }
                );
              });
            },
            (error) => {
              console.error(error);
              reject();
            }
          );
      }
    });
  }

  duplicateReport(reportID: string): Promise<string> {
    console.log('[Report Serv] Duplicating ' + reportID);

    return new Promise<string>((resolve, reject) => {
      //grab old template from database
      this._AngularFirestore
        .doc<Report>('/reports/' + reportID)
        .valueChanges()
        .pipe(first())
        .subscribe((originalReport) => {
          let newReport = originalReport;

          console.log(newReport);
          //reset templateID, id
          this.generateReportID().then((newReportID) => {
            newReport.templateID = originalReport.templateID;
            newReport.id = newReportID;
            newReport.completionStatus = 'incomplete';
            //save new template to database
            this._AngularFirestore
              .doc('/reports/' + newReportID)
              .set(newReport)
              .then(() => {
                let pagePromises: Promise<void>[] = [];
                for (let i = 0; i < newReport.pageCount; i++) {
                  this._AngularFirestore
                    .doc<Page>(
                      '/reports/' + reportID + '/pages/' + i.toString()
                    )
                    .valueChanges()
                    .pipe(first())
                    .subscribe((oldPage) => {
                      pagePromises.push(
                        this._AngularFirestore
                          .doc(
                            '/reports/' + newReportID + '/pages/' + i.toString()
                          )
                          .set(oldPage)
                      );
                    });
                }
                Promise.all(pagePromises).then(() => {
                  console.log('Report duplicated successfully.');
                  resolve(newReportID);
                }, reject);
              }, reject);
          });
        }, reject);
    });
  }

  //this returns the full JSON string of a report with all its pages
  getMagicString(reportID): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let fullReport: UnifiedReport;
      let reportHeader: Report;
      let pages: Page[] = [];
      let pagePromises: Promise<void>[] = [];
      this._AngularFirestore
        .doc<Report>('/reports/' + reportID)
        .get()
        .pipe(first())
        .subscribe((docSnap) => {
          reportHeader = docSnap.data() as Report;
          for (let i = 0; i < reportHeader.pageCount; i++) {
            pagePromises.push(
              new Promise<void>((resolve, reject) => {
                this._AngularFirestore
                  .doc('/reports/' + reportID + '/pages/' + i.toString())
                  .get()
                  .pipe(first())
                  .subscribe((pageSnap) => {
                    pages.push(pageSnap.data() as Page);
                    resolve();
                  }, reject);
              })
            );
          }
          //once all pages are finished loading
          Promise.all(pagePromises).then(() => {
            fullReport = {
              id: reportHeader.id,
              templateID: reportHeader.templateID,
              title: reportHeader.title || null,
              coverageDate: reportHeader.coverageDate || null,
              submitDate: reportHeader.submitDate || null,
              author: reportHeader.author || null,
              branch: reportHeader.branch || null,
              additionalInfo: reportHeader.additionalInfo || null,
              pageStatuses: reportHeader.pageStatuses || null,
              pageCount: reportHeader.pageCount,
              completionStatus: reportHeader.completionStatus,
              pages: pages,
            };
            let result = JSON.stringify(fullReport);
            console.log(fullReport);
            resolve(result);
          });
        });
    });
  }

  closeReport(redirectToHome: boolean = true) {
    this._report = null;
    this.report$.next(null);
    if (redirectToHome) {
      //go to the home page when closed
      this._Router.navigate(['']);
    }
    console.log('[Report Serv] The report has been successfully closed.');
  }

  deleteReport(report: Report): Promise<void> {
    let reportDoc = this._AngularFirestore.doc('/reports/' + report.id);
    //delete all pages
    for (let i = 0; i < report.pageCount; i++) {
      let pageDoc = reportDoc.collection('pages').doc(i.toString());
      pageDoc.delete();
    }
    return reportDoc.delete();
  }

  openPage(pageNumber: number): Promise<void> {
    console.log('[Report Serv] Opening page ' + pageNumber + '...');
    return new Promise<void>((resolve, reject) => {
      if (!this._report || !navigator.onLine) {
        console.error(
          '[Report Serv] Cannot open page. No report is open or device offline.'
        );
        reject();
      }
      let pageDoc = this._AngularFirestore.doc<Page>(
        '/reports/' + this._report.id + '/pages/' + pageNumber.toString()
      );
      pageDoc
        .valueChanges()
        .pipe(first())
        .subscribe((page) => {
          this._page = page;
          this.page$.next(page);
          resolve();
        }, reject);
    });
  }

  //this marks the report as 'complete' and grants visibility to admins
  submitReport(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (navigator.onLine === false) {
        console.error('[Report Serv] Cannot submit report. Device offline.');
        reject(); //reject if no report is open.
      }
      if (!this._report) {
        console.error('[Report Serv] Cannot submit report. None is open.');
        reject(); //reject if no report is open.
      }
      this._report.completionStatus = 'complete';
      this._report.submitDate = new Date().toISOString();
      this._report.author = this._UserService.getUserSnapshot().email;
      this.report$.next(this._report);
      this.saveReportOnline().then(() => {
        this.closeReport();
        resolve();
      }, reject);
    });
  }

  attachToBranch(updateOnline: boolean = false) {
    this._report.branch = this._UserService.getUserSnapshot().branch;
    this.report$.next(this._report);
    if (updateOnline) {
      this.saveReportOnline();
    }
  }

  getReportObservable() {
    return this.report$.asObservable();
  }
  get report(): Report {
    return this._report;
  }
  getPageObservable() {
    return this.page$.asObservable();
  }
  get page(): Page {
    return this._page;
  }

  saveReportOnline(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!navigator.onLine) {
        console.error(
          '[Report Serv] Cannot save report online. Device offline'
        );
        reject();
      }
      if (this._report) {
        let reportDoc = this._AngularFirestore.doc<Report>(
          'reports/' + this._report.id
        );
        reportDoc.set(this._report).then(() => {
          console.log('[Report Serv] Successfully saved report to server.');
          resolve();
        }, reject);
      } else {
        console.error('[Report Serv] Cannot save report online. None is open.');
        reject();
      }
    });
  }

  savePageOnline(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!navigator.onLine) {
        console.error('[Report Serv] Cannot save page online. Device offline');
        reject();
      }
      if (this._page) {
        let pageDoc = this._AngularFirestore.doc<Page>(
          'reports/' + this._report.id + '/pages/' + this._page.index
        );
        pageDoc.set(this._page).then(() => {
          console.log(
            '[Report Serv] Successfully saved page ' +
              this._page.index +
              ' to server.'
          );
          resolve();
        }, reject);
      } else {
        console.error('[Report Serv] Cannot save page online. None is open.');
        reject();
      }
    });
  }

  setSectionValue(pageIndex: number, sectionIndex: number, value: any) {
    console.log(value);
  }

  setCoverageDate(isoDate: string) {
    if (!isoDate || isNaN(new Date(isoDate).getTime())) {
      console.warn('[Report Serv] Cannot set coverage date. Invalid date.');
      return;
    }
    console.log('[Report Serv] Setting coverage date to ' + isoDate);
    this._report.coverageDate = isoDate;
    this.report$.next(this._report);
  }
  setSubmitDate(isoDate: string) {
    if (isNaN(new Date(isoDate).getTime())) {
      console.error('[Report Serv] Cannot set coverage date. Invalid date.');
      return;
    }
    console.log('[Report Serv] Setting submit date to ' + isoDate);
    this._report.submitDate = isoDate;
    this.report$.next(this._report);
  }
  setAuthor() {
    this._report.author = this._UserService.getUserSnapshot().email;
    this.report$.next(this._report);
  }
  setAdditionalInfo(info: string) {
    console.log('[Report Serv] Setting additional info to ' + info);
    this._report.additionalInfo = info;
    this.report$.next(this._report);
  }
  setTitle(title: string) {
    console.log('[Report Serv] Setting title to ' + title);
    this._report.title = title;
  }
  setSubject(subject: string) {
    console.log('[Report Serv] Setting subject to ' + subject);
    this._report.title = subject;
  }
  setTags(tags: string[]) {
    console.log('[Report Serv] Setting tags to ' + tags);
    this._report.tags = tags;
  }
  setPageStatus(pageIndex: number, status: string) {
    if (!(status === 'complete' || status === 'incomplete')) {
      console.warn('Is ' + status + ' a valid status?');
    }
    this._report.pageStatuses[pageIndex] = status;
    this.report$.next(this._report);
  }
  setCompletionStatus(status: string) {
    if (!(status === 'complete' || status === 'incomplete')) {
      console.warn('Is ' + status + ' a valid status?');
    }
    this._report.completionStatus = status;
  }

  fetchReports(reportIDs: string[]): Promise<Report[]> {
    let fetchPromises: Promise<Report>[] = [];
    reportIDs.forEach((reportID) => {
      let reportDoc = this._AngularFirestore.doc<Report>('reports/' + reportID);
      let fetchPromise = new Promise<Report>((resolve, reject) => {
        reportDoc
          .valueChanges()
          .pipe(first())
          .subscribe((report) => {
            resolve(report);
          }, reject);
      });
      fetchPromises.push(fetchPromise);
    });
    return Promise.all(fetchPromises);
  }

  fetchAllReports(): Promise<Report[]> {
    if (
      confirm(
        'This will read all reports from the database, and may take a while. Are you sure?'
      )
    ) {
      return new Promise<Report[]>((resolve, reject) => {
        let queryCollection = this._AngularFirestore.collection<Report>(
          '/reports'
        );
        queryCollection
          .valueChanges()
          .pipe(first())
          .subscribe((reports) => {
            resolve(reports);
          }, reject);
      });
    } else {
      return this.fetchAllReportsWithLimit(10);
    }
  }

  fetchAllReportsWithLimit(sizeLimit: number): Promise<Report[]> {
    return new Promise<Report[]>((resolve, reject) => {
      let queryCollection = this._AngularFirestore.collection<Report>(
        '/reports',
        (ref) => ref.limit(sizeLimit)
      );
      queryCollection
        .valueChanges()
        .pipe(first())
        .subscribe((reports) => {
          resolve(reports);
        }, reject);
    });
  }

  fetchReportsByBranchWithLimit(
    branch: string,
    sizeLimit: number
  ): Promise<Report[]> {
    return new Promise<Report[]>((resolve, reject) => {
      let queryCollection = this._AngularFirestore.collection<Report>(
        '/reports',
        (ref) => ref.where('branch', '==', branch).limit(sizeLimit)
      );
      queryCollection
        .valueChanges()
        .pipe(first())
        .subscribe((reports) => {
          resolve(reports);
        }, reject);
    });
  }

  fetchReportsByBranch(branch: string): Promise<Report[]> {
    return new Promise<Report[]>((resolve, reject) => {
      let queryCollection = this._AngularFirestore.collection<Report>(
        '/reports',
        (ref) => ref.where('branch', '==', branch)
      );
      queryCollection
        .valueChanges()
        .pipe(first())
        .subscribe((reports) => {
          resolve(reports);
        }, reject);
    });
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

  getFullReportCount(): Promise<number> {
    console.log('[Report Serv] Getting full report count');
    return new Promise<number>((resolve, reject) => {
      this._AngularFirestore
        .collection('/reports')
        .get()
        .pipe(first())
        .subscribe((snapshot) => {
          resolve(snapshot.size);
        }, reject);
    });
  }

  getReportCountByBranch(branchName: string): Promise<number> {
    console.log('[Report Serv] Getting report count for ' + branchName);
    return new Promise<number>((resolve, reject) => {
      this._AngularFirestore
        .collection('/reports', (ref) => ref.where('branch', '==', branchName))
        .get()
        .pipe(first())
        .subscribe((snapshot) => {
          resolve(snapshot.size);
        }, reject);
    });
  }
}
