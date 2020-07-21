import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  private _constants: BehaviorSubject<Object>;
  constructor(private _AngularFirestore: AngularFirestore) {
    this._constants = new BehaviorSubject<Object>(null);
    let constDoc = this._AngularFirestore.doc<any>('constants/constants');
    constDoc.valueChanges();
    constDoc.valueChanges().subscribe((constants) => {
      console.log(constants);
      this._constants.next(constants);
    });
  }

  get constants(): Observable<Object> {
    return this._constants.asObservable();
  }
}
