import { Report } from 'src/app/interfaces/report';
import { BehaviorSubject, range } from 'rxjs';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/interfaces/page';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private report$: BehaviorSubject<Report>;
  private _report: Report;
  private page$: BehaviorSubject<Page>;
  private _page: Page;
  constructor(private _AngularFirestore: AngularFirestore) {
    this.report$ = new BehaviorSubject<Report>(this._report); //undefined
    this.page$ = new BehaviorSubject<Page>(this._page); //undefined
    this.generateReportID(true, 4, '1234').then((result) =>
      console.log(result)
    );
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
            let pageDoc = reportDoc
              .collection('pages')
              .doc('0')
              .valueChanges()
              .pipe(first())
              .subscribe((page: Page) => {
                this._page = page;
                this.page$.next(page);
                resolve();
              });
          }
        });
    });
  }

  getReportObservable() {
    return this.report$.asObservable();
  }
  getPageObservable() {
    return this.page$.asObservable();
  }

  setSectionValue(pageIndex: number, sectionIndex: number, value: any) {}

  private generateReportID(
    checkUniqueness = true,
    length = 4,
    override?: string
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
      let result = '';
      //randomly generate a string if one isn't provided
      if (override) {
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
            console.log(observer.length);
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
}
