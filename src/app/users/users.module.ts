import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { DevGoalsComponent } from './dev-goals/dev-goals.component';
import { OrgGoalsComponent } from './org-goals/org-goals.component';
import { DirectReportsComponent } from './direct-reports/direct-reports.component';


@NgModule({
  declarations: [
DevGoalsComponent,
OrgGoalsComponent,
DirectReportsComponent],
  imports: [
  CommonModule,
  MaterialModule
  ]
})
export class UsersModule {}
