import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { CriticalElementsComponent } from './critical-elements/critical-elements.component';
import { ManageCriticalElementsComponent } from './manage-critical-elements/manage-critical-elements.component';
import { QuartlerlyReviewComponent } from './quartlerly-review/quartlerly-review.component';
import { AchievementsComponent } from './achievements/achievements.component';


@NgModule({
  declarations: [
    CriticalElementsComponent,
    ManageCriticalElementsComponent,
    QuartlerlyReviewComponent,
    AchievementsComponent
  ],
  imports: [
  CommonModule,
  BrowserModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ]
})
export class CriticalElementsModule {}
