import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TaskspageComponent } from './taskspage/taskspage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddtaskComponent } from './addtask/addtask.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from '@angular/material/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { LOCALE_ID } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { HistoryComponent } from './history/history.component';
registerLocaleData(localePl);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    TaskspageComponent,
    AddtaskComponent,
    CapitalizePipe,
    HistoryComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatInputModule, 
    FormsModule, 
    HttpClientModule, 
    MatIconModule, 
    MatMenuModule, 
    MatTooltipModule, 
    MatSidenavModule, 
    MatListModule, 
    MatDialogModule, 
    MatDatepickerModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatNativeDateModule, 
    MatSelectModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }, { provide: LOCALE_ID, useValue: "pl-PL" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
