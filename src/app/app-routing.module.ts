import { PreferencesComponent } from './components/preferences/preferences.component';
import { ReportComponent } from './components/report/report.component';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  AngularFireAuthGuard,
  redirectLoggedInTo,
  emailVerified,
  loggedIn,
} from '@angular/fire/auth-guard';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const rejectUnverified = () => emailVerified;
map((user) => {
  console.log(user);
});
const routes: Routes = [
  {
    path: 'report/:template-id/:report-id/:page-number',
    component: ReportComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: rejectUnverified },
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: rejectUnverified },
  },
  {
    path: 'report/:template-id',
    component: ReportComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: rejectUnverified },
  },
  {
    path: '',
    component: StartComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
