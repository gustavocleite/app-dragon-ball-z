import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters/characters-list/characters-list.component';
import { PlanetsListComponent } from './pages/planets/planets-list/planets-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters-list',
    pathMatch: 'full'
  },
  {
    path: 'characters-list',
    component: CharactersListComponent
  },
  {
    path: 'planets-list',
    component: PlanetsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
