import { Component } from '@angular/core';
import { Character, Characters } from '../characters';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent {
  characters: Character[] = [];

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: Characters) => {
      this.characters = data.items;
    });
  }
}
