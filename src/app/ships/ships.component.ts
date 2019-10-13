import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  ships: Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.ships = this.apiService.shipsFetch;

  }

  nextPage() {
    this.apiService.moreData();
  }

  selectedShip(ship) {
    // console.log(ship);
    this.apiService.shipInfo(ship.name);
  }

}
