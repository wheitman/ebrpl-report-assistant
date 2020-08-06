import { config } from './../assets/env';
import { TemplateService } from './services/template.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public router: Router, private tserv: TemplateService) {}
  navHidden: boolean;

  ngOnInit(): void {
    this.router.events.subscribe((url) => {
      this.navHidden = this.router.url === '/login' ? true : false;
    });
  }
}
