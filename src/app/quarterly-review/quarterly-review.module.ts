import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { QuartersComponent } from './quarters/quarters.component';
import { QuarterComponent } from './quarter/quarter.component';


@NgModule({
  declarations: [
    QuartersComponent,
    QuarterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class QuarterlyReviewModule { }
