import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchedData;


  fetchData() {
// tslint:disable-next-line: max-line-length
    const url = `https://swapi.co/api/starships/`;
    return this.http.get(url).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.fetchedData = data;
     console.log(this.fetchedData);
     
    });
  }
}
