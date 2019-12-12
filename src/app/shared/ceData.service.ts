import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { CEData } from './ceData.model';

@Injectable({providedIn: 'root'})
export class CEDataService {

  constructor(private http: HttpClient ) {}

  createAndStoreCEData(title: string, content: string) {
    const ceData: CEData = { title: title, content: content };
    this.http
    .post<{ name: string }>(
     'https://pprototype-7cbf4.firebaseio.com/criticalElements.json',
     ceData
     )
     .subscribe(responseData => {
       console.log(responseData);
     });
  }


  fetchCEData() {
   return this.http
    .get<{ [key: string]: CEData }>('https://pprototype-7cbf4.firebaseio.com/criticalElements.json')
    .pipe(
      map(responseData => {
      const ceDataArray: CEData[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          ceDataArray.push({ ...responseData[key], id: key });
        }
      }
      return ceDataArray;
    }));
  }

  deleteCriticalElements() {
    return this.http
    .delete('https://pprototype-7cbf4.firebaseio.com/criticalElements.json',
    {
      observe: 'events',
      responseType: 'text'
    }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
