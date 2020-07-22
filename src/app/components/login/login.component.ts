import { auth } from 'firebase/app';
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
import { UserService } from 'src/app/services/user.service';

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
  loginGroup: FormGroup;
  createAccountGroup: FormGroup;
  forgotPasswordGroup: FormGroup;
  currentScreen: string = 'login';
  alert: string = null;
  alertMessage: string = '';

  constructor(public _Router: Router, public userv: UserService) {}

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      emailInput: new FormControl('', Validators.required),
      passwordInput: new FormControl('', Validators.required),
    });
    this.createAccountGroup = new FormGroup(
      {
        emailInput: new FormControl('', Validators.required),
        newPasswordInput: new FormControl('', Validators.required),
        confirmPasswordInput: new FormControl('', Validators.required),
        branchSelect: new FormControl('Branch', Validators.required),
      },
      [checkMatch]
    );
    this.forgotPasswordGroup = new FormGroup({
      emailInput: new FormControl('', Validators.required),
    });
  }

  tryLogin() {
    console.log('Logging in...');
    let email = this.loginGroup.get('emailInput').value;
    let password = this.loginGroup.get('passwordInput').value;
    console.log(this.loginGroup.get('emailInput').value);
    this.userv
      .logIn(email, password)
      .then(() => {
        console.log('Login successful.');
        this._Router.navigate(['']);
      })
      .catch((error) => {
        console.log(error);
        this.showErrorAlert(
          'Invalid username or password. Does this account exist?'
        );
      });
  }

  createAccount() {
    let email = this.createAccountGroup.get('emailInput').value;
    let newPassword = this.createAccountGroup.get('newPasswordInput').value;
    let confirmPassword = this.createAccountGroup.get('confirmPasswordInput')
      .value;
    let branch = this.createAccountGroup.get('branchSelect').value;
    if (!this.createAccountGroup.errors) {
      console.log('Creating account');
      this.hideAlert();
      //pass a fresh User to createAccount, along with new password
      this.userv
        .createAccount(
          {
            email: email,
            emailVerified: false,
            branch: branch,
            role: 'user',
          },
          newPassword
        )
        .then(() => {
          auth().currentUser.sendEmailVerification();
          this.showSuccessAlert(
            'Account successfully created. Please check your email to finish up. Redirecting...'
          );
          setTimeout(() => {
            this._Router.navigate(['']);
          }, 5000);
        })
        .catch((error) => {
          console.error('ERROR' + error);
          this.showErrorAlert(error);
          this.createAccountGroup.setErrors({ firebase: true });
        });
    } else if (this.createAccountGroup.getError('notMatching')) {
      console.error('Passwords do not match');
      this.showErrorAlert('Passwords do not match.');
    } else {
      console.error(this.createAccountGroup.errors);
    }
  }

  sendResetEmail() {
    auth()
      .sendPasswordResetEmail(this.forgotPasswordGroup.get('emailInput').value)
      .catch((error) => {
        console.log(error.code);
      });
    this.showSuccessAlert(
      'If that account exists, a reset email has been sent.'
    );
    this.showLogin();
  }

  showErrorAlert(error: string) {
    this.alert = 'danger';
    this.alertMessage = error;
  }

  showSuccessAlert(message: string) {
    this.alert = 'success';
    this.alertMessage = message;
  }

  hideAlert() {
    this.alert = null;
    this.alertMessage = '';
  }

  showSignup() {
    this.currentScreen = 'signup';
    this.hideAlert();
  }

  showLogin() {
    this.currentScreen = 'login';
    //this.hideAlert();
  }
  showReset() {
    this.currentScreen = 'reset';
    this.hideAlert();
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

  get loginVisible() {
    return this.currentScreen === 'login';
  }
  get signupVisible() {
    return this.currentScreen === 'signup';
  }
  get resetVisible() {
    return this.currentScreen === 'reset';
  }

  getConstant(constantName: string) {
    return [
      'Main Library',
      'Baker Branch',
      'Bluebonnet Regional Branch',
      'Carver Branch',
      'Central Branch',
      'Delmont Gardens Branch',
      'Eden Park Branch',
      'Fairwood Branch',
      'Greenwell Springs Rd. Regional Branch',
      'Jones Creek Regional Branch',
      'Pride-Chaneyville Branch',
      'River Center Branch',
      'Scotlandville Branch',
      'Zachary Branch',
    ];
  }
}
