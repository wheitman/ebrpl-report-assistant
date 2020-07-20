import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { first } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User;
  private user$: BehaviorSubject<User>;

  constructor(
    public _AngularFireAuth: AngularFireAuth,
    private _AngularFirestore: AngularFirestore
  ) {
    this.user$ = new BehaviorSubject<User>(null);
    _AngularFireAuth.user.subscribe((authUser) => {
      if (!authUser) {
        //if no user is logged in, set the user to null
        this._user = null;
        this.user$.next(this._user);
      } else {
        //else fetch the user data from the server
        console.log(authUser.emailVerified);
        let userDoc = _AngularFirestore.doc<User>('users/' + authUser.email);
        userDoc
          .valueChanges()
          .pipe(first())
          .subscribe((user) => {
            if (user.emailVerified !== authUser.emailVerified) {
              userDoc
                .update({ emailVerified: authUser.emailVerified })
                .then(() => {
                  user.emailVerified = authUser.emailVerified;
                  this._user = user;
                  this.user$.next(this._user);
                  console.log(this._user);
                });
            } else {
              this._user = user;
              this.user$.next(this._user);
              console.log(this._user);
            }
          });
      }
    });
  }

  logIn(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._AngularFireAuth.signInWithEmailAndPassword(email, password).then(
        (value) => {
          console.log('[User Serv] Logged in');
          resolve();
        },
        (reason) => {
          console.error('[User Serv] Login failed: ' + reason);
          reject();
        }
      );
    });
  }

  logOut(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._AngularFireAuth.signOut().then(
        (value) => {
          console.log('[User Serv] Signed out');
          resolve();
        },
        (reason) => {
          console.error('[User Serv] Signout failed: ' + reason);
          reject();
        }
      );
    });
  }
  createAccount(user: User, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._AngularFireAuth
        .createUserWithEmailAndPassword(user.email, password)
        .then((authcred: auth.UserCredential) => {
          this._AngularFirestore
            .doc<User>('users/' + user.email)
            .set(user)
            .then(resolve)
            .catch((error) => {
              console.log('[User Serv] Error creating account: ' + error);
              reject(error);
            });
        })
        .catch((error) => {
          console.log('[User Serv] Error creating account: ' + error);
          reject(error);
        });
    });
  }

  getUserObservable(): Observable<User> {
    return this.user$.asObservable();
  }
  getUserSnapshot(): User {
    return this._user;
  }

  setBranch(newBranch: string): Promise<void> {
    let userDoc = this._AngularFirestore.doc<User>('users/' + this._user.email);
    return userDoc.update({ branch: newBranch }).then(() => {
      this._user.branch = newBranch;
    });
  }

  addReportID(reportID: string): Promise<void> {
    let userDoc = this._AngularFirestore.doc<User>('users/' + this._user.email);
    let newReportIDs = this._user.reportIDs;
    newReportIDs.push(reportID);
    return userDoc.update({ reportIDs: newReportIDs }).then(() => {
      this._user.reportIDs = newReportIDs;
    });
  }
  removeReportID(reportID: string): Promise<void> {
    let userDoc = this._AngularFirestore.doc<User>('users/' + this._user.email);
    let newReportIDs = this._user.reportIDs;
    var index = newReportIDs.indexOf(reportID);
    if (index > -1) {
      newReportIDs.splice(index, 1);
    } else {
      console.error("[User Serv] Couldn't locate report ID for removal.");
    }
    return userDoc.update({ reportIDs: newReportIDs }).then(() => {
      this._user.reportIDs = newReportIDs;
    });
  }

  sendVerificationEmail(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().currentUser.sendEmailVerification().then(resolve, reject);
    });
  }
}
