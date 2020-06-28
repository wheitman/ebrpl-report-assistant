import { ReportService } from './services/report.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportComponent } from './components/report/report.component';
import { AbstractSection } from './components/sections/abstract-section/abstract-section.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    NavbarComponent,
    ReportComponent,
    AbstractSection,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [ReportService],
  bootstrap: [AppComponent],
})
export class AppModule {}
