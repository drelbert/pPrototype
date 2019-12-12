import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    UserComponent,
    EmployeesComponent
  ],
  imports: [
  CommonModule,
  MaterialModule
  ]
})
export class CriticalElementsModule {}
