import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule} from '@angular/flex-layout';

import { BaseComponent } from './base.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CriticalElementsComponent } from '../critical-elements/critical-elements/critical-elements.component';
import { UserComponent } from '../users/user/user.component';
import { ManageCriticalElementsComponent } from '../critical-elements/manage-critical-elements/manage-critical-elements.component';
import { QuartlerlyReviewComponent } from '../critical-elements/quartlerly-review/quartlerly-review.component';
import { AchievementsComponent } from '../critical-elements/achievements/achievements.component';


@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    DashboardComponent,
    CriticalElementsComponent,
    UserComponent,
    ManageCriticalElementsComponent,
    QuartlerlyReviewComponent,
    AchievementsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ]
})
export class BaseModule { }
