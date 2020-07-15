import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import {
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

function checkMatch(
  control: AbstractControl
): { [key: string]: boolean } | null {
  let password1 = control.get('newPasswordInput').value;
  let password2 = control.get('confirmPasswordInput').value;
  if (password1 !== password2) {
    return {
      notMatching: true,
    };
  } else return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  isSignup: boolean = false;
  alert: string = null;
  alertMessage: string = '';

  constructor(public _Router: Router) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup(
      {
        emailInput: new FormControl('', Validators.required),
        passwordInput: new FormControl('', Validators.required),
        newPasswordInput: new FormControl('', Validators.required),
        confirmPasswordInput: new FormControl('', Validators.required),
      },
      [checkMatch]
    );
  }

  tryLogin() {
    console.log('Logging in...');
    let email = this.formGroup.get('emailInput').value;
    let password = this.formGroup.get('passwordInput').value;
    console.log(this.formGroup.get('emailInput').value);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login successful.');
        this._Router.navigate(['']);
      })
      .catch((error) => {
        console.log(error.code + ': ' + error.message);
        this.showErrorAlert('Invalid username or password.');
      });
  }

  createAccount() {
    let email = this.formGroup.get('emailInput').value;
    let newPassword = this.formGroup.get('newPasswordInput').value;
    let confirmPassword = this.formGroup.get('confirmPasswordInput').value;
    if (!this.formGroup.errors) {
      console.log('Creating account');
      this.hideAlert();
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, newPassword)
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification();
          console.log('Email sent... right?');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.showErrorAlert(
              'Email already in use. Log in or reset password.'
            );
          } else if (error.code === 'auth/weak-password') {
            this.showErrorAlert(
              'Passwords should be at least six characters long.'
            );
          } else {
            console.error(error.code);
            this.showErrorAlert(error.code);
          }
        });
    } else if (this.formGroup.getError('notMatching')) {
      console.error('Passwords do not match');
      this.showErrorAlert('Passwords do not match.');
    } else {
      console.error(this.formGroup.errors);
    }
  }

  showErrorAlert(error: string) {
    this.alert = 'danger';
    this.alertMessage = error;
  }

  hideAlert() {
    this.alert = null;
    this.alertMessage = '';
  }

  showSignup() {
    this.isSignup = true;
  }
  hideSignup() {
    this.isSignup = false;
  }

  get alertClass() {
    if (this.alert === 'danger') {
      return 'alert alert-danger';
    } else if (this.alert === 'warning') {
      return 'alert alert-warning';
    } else if (this.alert === 'info') {
      return 'alert alert-info';
    } else if (this.alert === 'success') {
      return 'alert alert-success';
    } else return null;
  }
}
