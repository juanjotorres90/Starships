import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShipsComponent } from './ships/ships.component';
import { HttpClientModule } from '@angular/common/http';
import { StarshipListComponent } from './ships/starship-list/starship-list.component';
import { StarshipComponent } from './ships/starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShipsComponent,
    StarshipListComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
