import { ReportComponent } from './components/report/report.component';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  AngularFireAuthGuard,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'report/:template-id/:page-number', component: ReportComponent },
  {
    path: '',
    component: StartComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedTo(['login']) },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
