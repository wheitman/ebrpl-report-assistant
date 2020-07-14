import { Report } from 'src/app/interfaces/report';
import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  report: Report;

  constructor(_ResponseService: ResponseService) {}

  ngOnInit(): void {
    ResponseService.reportObservable.subscribe((observer) => {
      this.report = observer;
      console.warn(this.report);
    });
  }
}
