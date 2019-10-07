import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'starships';

  ngOnInit() {
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }
}
