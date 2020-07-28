import { TemplateService } from './services/template.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { report, pages } from 'src/assets/dev/outline';

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
