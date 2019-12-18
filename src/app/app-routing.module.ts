import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { QuarterOneComponent } from './quarterly-review/quarters/quarter-one/quarter-one.component';
import { QuarterTwoComponent } from './quarterly-review/quarters/quarter-two/quarter-two.component';


const routes: Routes = [
{ path: '', component: UserDashboardComponent },
{ path: 'quarterOne', component: QuarterOneComponent },
{ path: 'quarterTwo', component: QuarterTwoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
