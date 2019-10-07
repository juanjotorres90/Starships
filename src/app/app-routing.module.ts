import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from './ships/ships.component';


const routes: Routes = [
  { path: '', redirectTo: '/ships', pathMatch: 'full' },
  { path: 'ships', component: ShipsComponent }
  // { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
