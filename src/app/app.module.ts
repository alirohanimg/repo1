import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './+pages/login/login.component';
import { RegisterComponent } from './+pages/register/register.component';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './+pages/dashboard/dashboard.component';
import { RouterLink, RouterOutlet } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    NgModule,
    LoginComponent,
    RegisterComponent,
    DashboardComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RegisterComponent,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    LoginComponent,
    DashboardComponent,
    RouterOutlet,
    RouterLink





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
