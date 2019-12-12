import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CEData } from 'src/app/shared/ceData.model';
import { CEDataService } from 'src/app/shared/ceData.service';

@Component({
  selector: 'app-critical-elements',
  templateUrl: './critical-elements.component.html',
  styleUrls: ['./critical-elements.component.scss']
})
export class CriticalElementsComponent implements OnInit {
  loadedCriticalElements: CEData[] = [];
  isFetching = false;

  constructor(private http: HttpClient,
              private ceDataService: CEDataService ) { }

  ngOnInit() {
    this.isFetching = true;
    this.ceDataService.fetchCEData().subscribe(criticalElements => {
      this.isFetching = false;
      this.loadedCriticalElements = criticalElements;
    });
  }

  onFetchCriticalElements() {
    this.isFetching = true;
    this.ceDataService.fetchCEData().subscribe(criticalElements => {
      this.isFetching = false;
      this.loadedCriticalElements = criticalElements;
    });
  }

  onClearCriticalElements() {
    this.ceDataService.deleteCriticalElements().subscribe(() => {
      this.loadedCriticalElements = [];
    });
  }
}
