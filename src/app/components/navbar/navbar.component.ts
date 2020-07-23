import { Router, ActivatedRoute } from '@angular/router';
import { Report } from 'src/app/interfaces/report';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  report: Report;
  provider;
  vw = 0;
  offline: boolean;

  constructor(
    private _ReportService: ReportService,
    public auth: AngularFireAuth,
    public _Router: Router,
    public userv: UserService
  ) {}

  ngOnInit(): void {
    this._ReportService.getReportObservable().subscribe((observer) => {
      this.report = observer;
    });
    window.onresize = (event) => {
      this.vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
    };
    onoffline = () => {
      this.offline = !navigator.onLine;
    };
    ononline = () => {
      this.offline = !navigator.onLine;
    };
  }

  login() {
    this._Router.navigate(['login']);
  }

  logout() {
    this.userv.logOut();
    this._Router.navigate(['login']);
  }

  get userShape(): string {
    if (
      this.userv.getUserSnapshot() &&
      this.userv.getUserSnapshot().role === 'admin'
    ) {
      return 'administrator';
    } else return 'user';
  }

  get isAdmin() {
    let user = this.userv.getUserSnapshot();
    if (user && user.role === 'admin') {
      return true;
    } else return false;
  }
}
