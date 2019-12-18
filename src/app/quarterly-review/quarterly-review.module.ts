import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { QuarterOneComponent } from './quarters/quarter-one/quarter-one.component';
import { QuarterTwoComponent } from './quarters/quarter-two/quarter-two.component';


@NgModule({
  declarations: [

  QuarterOneComponent,

  QuarterTwoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class QuarterlyReviewModule { }
