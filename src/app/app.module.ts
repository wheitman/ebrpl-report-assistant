import { ConstantService } from './services/constant.service';
import { ReportService } from 'src/app/services/report.service';
import { environment } from './../environments/environment';
import { TemplateService } from './services/template.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule, ClrDropdown } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportComponent } from './components/report/report.component';
import { AbstractSection } from './components/sections/abstract-section/abstract-section.component';
import { DatagridSection } from './components/sections/datagrid-section/datagrid-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DivisionSelectComponent } from './components/controls/division-select/division-select.component';
import { SimpleInputSection } from './components/sections/simple-input/simple-input.component';
import { MonthSelectComponent } from './components/controls/month-select/month-select.component';
import { AngularFireModule } from '@angular/fire';
import { UserService } from './services/user.service';
import { PreferencesComponent } from './components/preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    NavbarComponent,
    ReportComponent,
    AbstractSection,
    DatagridSection,
    DivisionSelectComponent,
    SimpleInputSection,
    MonthSelectComponent,
    PreferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [TemplateService, UserService, ConstantService, ReportService],
  bootstrap: [AppComponent],
})
export class AppModule {}
