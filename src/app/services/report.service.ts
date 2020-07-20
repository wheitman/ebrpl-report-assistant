import { Report } from 'src/app/interfaces/report';
import { BehaviorSubject } from 'rxjs';
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
  }

  openReport(reportID: string, startPage: number = 0): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let reportDoc = this._AngularFirestore.doc<Report>(
        '/reports/' + reportID
      );
      reportDoc
        .valueChanges()
        .pipe(first())
        .subscribe((report) => {
          this._report = report;
          this.report$.next(report);
          console.log(this._report);

          let pageDoc = reportDoc
            .collection('pages')
            .doc('0')
            .valueChanges()
            .pipe(first())
            .subscribe((page: Page) => {
              this._page = page;
              this.page$.next(page);
              console.log(this._page);
              resolve();
            });
        });
    });
  }

  getReportObservable() {
    return this.report$;
  }
  getPageObservable() {
    return this.page$;
  }

  setSectionValue(pageIndex: number, sectionIndex: number, value: any) {}
}
