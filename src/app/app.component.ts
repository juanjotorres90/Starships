import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'starships';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(function() {
      $('[data-toggle="popover"]').popover();
    });

    this.apiService.fetchData();
  }
}
