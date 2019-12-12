import { Component } from '@angular/core';

export interface EmployeeStatus {
  name: string;
  initialMeeting: string;
  midPointMeeting: string;
  closeoutMeeting: string;
}

const StatusData: EmployeeStatus[] = [
  {name: 'Derell DonJulio', initialMeeting: 'Jan 15, 2019', midPointMeeting: 'May 2, 2019', closeoutMeeting: 'Not Complete'},
  {name: 'Tine Garden', initialMeeting: 'Jan 20, 2019', midPointMeeting: 'May 5, 2019', closeoutMeeting: 'Not Complete'},
  {name: 'RuPaul Garcia', initialMeeting: 'Jan 15, 2019', midPointMeeting: 'Not Complete', closeoutMeeting: 'Not Complete'},
];


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  displayedColumns: string[] = ['Name', 'Initial', 'Mid Point', 'Close Out'];
  dataSource = StatusData;

  constructor() { }

}
