import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchedData;
  // fetchedShips;
  nextData;
  nextShips;
  shipsFetch = [];
  shipNames;

  shipName = {};

  fetchData() {
    // tslint:disable-next-line: max-line-length
    const url = `https://swapi.co/api/starships/`;
    return this.http
      .get(url, {
        headers: new HttpHeaders({ Authorization: 'none' })
      })
      .subscribe(data => {
        // tslint:disable-next-line: no-string-literal
        this.fetchedData = data;
        // tslint:disable-next-line: no-string-literal
        // this.fetchedShips = data['results'];
        this.fetchedData.results.forEach(ship => {
          this.shipsFetch.push(ship);
        });
        console.log(this.fetchedData);
        // console.log(this.fetchedShips);

      });
  }

  moreData() {
    const url = this.fetchedData.next;
    if (url === null) { return; }
    return this.http
      .get(url, {
        headers: new HttpHeaders({ Authorization: 'none' })
      })
      .subscribe(data => {
        // tslint:disable-next-line: no-string-literal
        this.nextData = data;
        // tslint:disable-next-line: no-string-literal
        this.nextShips = data['results'];
        this.fetchedData.next = this.nextData.next;
        this.nextShips.forEach(ship => {
          this.shipsFetch.push(ship);
        });
        console.log(this.nextData);
        // console.log(this.fetchedShips);

      });
  }

  shipInfo(ship) {
    this.shipName = this.shipsFetch.filter(item => item.name === ship);
    // console.log(this.shipName[0]);
    // console.log(ship);

  }
}
