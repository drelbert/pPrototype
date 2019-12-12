import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './base/header/header.component';
import { DashboardComponent } from './base/dashboard/dashboard/dashboard.component';
import { CriticalElementsComponent } from './critical-elements/critical-elements/critical-elements.component';
import { UserComponent } from './users/user/user.component';
import { ManageCriticalElementsComponent } from './critical-elements/manage-critical-elements/manage-critical-elements.component';
import { QuartlerlyReviewComponent } from './critical-elements/quartlerly-review/quartlerly-review.component';
import { AchievementsComponent } from './critical-elements/achievements/achievements.component';
import { EmployeesComponent } from './users/employees/employees.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HeaderComponent,
    DashboardComponent,
    CriticalElementsComponent,
    UserComponent,
    ManageCriticalElementsComponent,
    QuartlerlyReviewComponent,
    AchievementsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
