import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { QuarterlyReviewModule } from './quarterly-review/quarterly-review.module';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { QuartersComponent } from './quarterly-review/quarters/quarters.component';
//import { QuarterComponent } from './quarterly-review/quarter/quarter.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DevGoalsComponent } from './users/dev-goals/dev-goals.component';
import { OrgGoalsComponent } from './users/org-goals/org-goals.component';
import { DirectReportsComponent } from './users/direct-reports/direct-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDashboardComponent,
    MainNavComponent,
    QuartersComponent,
    DevGoalsComponent,
    OrgGoalsComponent,
    DirectReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    QuarterlyReviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
