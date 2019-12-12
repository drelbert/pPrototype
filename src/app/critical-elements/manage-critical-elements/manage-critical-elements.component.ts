import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CEData } from 'src/app/shared/ceData.model';
import { CEDataService } from 'src/app/shared/ceData.service';

@Component({
  selector: 'app-manage-critical-elements',
  templateUrl: './manage-critical-elements.component.html',
  styleUrls: ['./manage-critical-elements.component.scss']
})
export class ManageCriticalElementsComponent implements OnInit {
  loadedCriticalElements: CEData[] = [];
  isFetching = false;

  constructor(private http: HttpClient,
              private ceDataService: CEDataService) { }

  ngOnInit() {
    this.isFetching = true;
    this.ceDataService.fetchCEData().subscribe(criticalElements => {
      this.isFetching = false;
      this.loadedCriticalElements = criticalElements;
    });
  }

  onAddedCriticalElement(ceData: CEData) {
   this.ceDataService.createAndStoreCEData(ceData.title, ceData.content);
  }

  onFetchCriticalElements() {
    this.isFetching = true;
    this.ceDataService.fetchCEData().subscribe(criticalElements => {
      this.isFetching = false;
      this.loadedCriticalElements = criticalElements;
    });
  }

  // onClearCriticalElements() {
  //   this.ceDataService.deleteCriticalElements().subscribe(() => {
  //     this.loadedCriticalElements = [];
  //   });
  // }

}
