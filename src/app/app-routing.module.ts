import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuarterComponent } from './quarterly-review/quarter/quarter.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';


const routes: Routes = [
{ path: '', component: UserDashboardComponent },
{ path: 'quarter', component: QuarterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
