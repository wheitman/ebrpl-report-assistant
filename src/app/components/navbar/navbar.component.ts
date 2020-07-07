import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  reportTitle: string;

  constructor(_ResponseService: ResponseService) {}

  ngOnInit(): void {
    this.reportTitle = ResponseService.reportTitle;
  }
}
