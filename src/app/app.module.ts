import { ConstantService } from './services/constant.service';
import { ReportService } from 'src/app/services/report.service';
import { config } from './../assets/env';
import { TemplateService } from './services/template.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DivisionSelectComponent } from './components/controls/division-select/division-select.component';
import { SimpleInputSection } from './components/sections/simple-input/simple-input.component';
import { MonthSelectComponent } from './components/controls/month-select/month-select.component';
import { AngularFireModule } from '@angular/fire';
import { UserService } from './services/user.service';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { BuilderComponent } from './components/builder/builder.component';
import { ClipboardModule } from 'ngx-clipboard';

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
    BuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
    AngularFireModule.initializeApp(config.firebase),
  ],
  providers: [TemplateService, UserService, ConstantService, ReportService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
