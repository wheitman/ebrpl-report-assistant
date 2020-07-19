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

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User;
  private user$: BehaviorSubject<User>;
  private userDoc: AngularFirestoreDocument<User>;

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = new BehaviorSubject<User>(null);
    auth.user.subscribe((authUser) => {
      if (!authUser) {
        //if no user is logged in, set the user to null
        this._user = null;
        this.user$.next(this._user);
      } else {
        //else fetch the user data from the server
        let userDoc = afs.doc<User>('users/' + authUser.email);
        userDoc
          .valueChanges()
          .pipe(first())
          .subscribe((user) => {
            this._user = user;
            this.user$.next(this._user);
            console.log(this._user);
          });
      }
    });
  }

  logIn(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password).then(
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

  private getUserFromServer(email: string) {}

  logOut(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.auth.signOut().then(
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
      this.auth
        .createUserWithEmailAndPassword(user.email, password)
        .then((authcred: auth.UserCredential) => {
          this.afs
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
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }

  addReportID(reportID: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }
  removeReportID(reportID: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }
}
