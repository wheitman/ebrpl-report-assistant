import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  private constants: Observable<Object>;
  constructor(private _AngularFirestore: AngularFirestore) {
    let constDoc = this._AngularFirestore.doc<any>('constants/constants');
    this.constants = constDoc.valueChanges();
    constDoc.valueChanges().subscribe((constants) => {
      console.log(constants);
    });
  }

  get constantObservable(): Observable<Object> {
    return this.constants;
  }
}
