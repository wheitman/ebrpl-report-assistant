import { Router, ActivatedRoute } from '@angular/router';
import { Report } from 'src/app/interfaces/report';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  report: Report;
  provider;

  constructor(
    _ResponseService: ResponseService,
    public auth: AngularFireAuth,
    public _Router: Router
  ) {}

  ngOnInit(): void {
    ResponseService.reportObservable.subscribe((observer) => {
      this.report = observer;
    });
  }

  login() {
    this._Router.navigate(['login']);
  }

  logout() {
    this.auth.signOut();
    this._Router.navigate(['login']);
  }
}
