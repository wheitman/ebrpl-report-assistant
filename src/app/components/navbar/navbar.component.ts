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

  constructor(
    _ResponseService: ReportService,
    public auth: AngularFireAuth,
    public _Router: Router,
    public userv: UserService
  ) {}

  ngOnInit(): void {
    ReportService.reportObservable.subscribe((observer) => {
      this.report = observer;
    });
  }

  login() {
    this._Router.navigate(['login']);
  }

  logout() {
    this.userv.logOut();
    this._Router.navigate(['login']);
  }
}
