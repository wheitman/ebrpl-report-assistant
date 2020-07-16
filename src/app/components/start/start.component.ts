import { AngularFireAuth } from '@angular/fire/auth';
import { TemplateService } from '../../services/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  templateNames: string[] = [''];

  userVerified: boolean = false;

  constructor(
    public reportService: TemplateService,
    public auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.reportService.getTemplateNames().subscribe((names) => {
      this.templateNames = names;
    });
    this.auth.user.subscribe((user) => {
      if (user) {
        this.userVerified = user.emailVerified;
      }
    });
  }
}
