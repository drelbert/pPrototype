import { Component, OnInit } from '@angular/core';

export interface Rating {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-quartlerly-review',
  templateUrl: './quartlerly-review.component.html',
  styleUrls: ['./quartlerly-review.component.scss']
})
export class QuartlerlyReviewComponent implements OnInit {
  ratings: Rating[] = [
    {value: '1', viewValue: 'Score = 1'},
    {value: '2', viewValue: 'Score = 2'},
    {value: '3', viewValue: 'Score = 3'},
    {value: '4', viewValue: 'Score = 4'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
