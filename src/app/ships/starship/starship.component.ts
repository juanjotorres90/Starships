import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  @Input() ship;
  @Input() index;

  shipData;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.shipData = this.apiService.shipName[0];
  }
}
