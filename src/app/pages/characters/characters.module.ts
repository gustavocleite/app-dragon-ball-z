import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharactersListComponent } from './characters-list/characters-list.component';


@NgModule({
  declarations: [
    CharactersDetailComponent,
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  exports: [
    CharactersDetailComponent,
    CharactersListComponent
  ]
})
export class CharactersModule { }
