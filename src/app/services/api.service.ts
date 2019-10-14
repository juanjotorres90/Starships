import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchedData;

  nextData;
  nextShips;

  shipsFetch = [];

  shipName = {};

  fetchData() {
    const url = `https://swapi.co/api/starships/`;
    return this.http
      .get(url, {
        headers: new HttpHeaders({ Authorization: 'none' })
      })
      .subscribe(data => {
        this.fetchedData = data;
        this.fetchedData.results.forEach(ship => {
          this.shipsFetch.push(ship);
        });
        console.log(this.fetchedData);
      });
  }

  moreData() {
    const url = this.fetchedData.next;
    if (url === null) {
      return;
    }
    return this.http
      .get(url, {
        headers: new HttpHeaders({ Authorization: 'none' })
      })
      .subscribe(data => {
        this.nextData = data;
        // tslint:disable-next-line: no-string-literal
        this.nextShips = data['results'];
        this.fetchedData.next = this.nextData.next;
        this.nextShips.forEach(ship => {
          this.shipsFetch.push(ship);
        });
        console.log(this.nextData);
      });
  }

  shipInfo(ship) {
    this.shipName = this.shipsFetch.filter(item => item.name === ship);
  }
}
