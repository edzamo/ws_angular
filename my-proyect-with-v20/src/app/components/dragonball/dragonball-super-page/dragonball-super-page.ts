import { Component, computed, signal } from '@angular/core';

import { DragonballCharacterAdd } from "../dragonball-character-add/dragonball-character-add";
import { Character } from '../../interfaces/character';
import { CharacterList } from '../../character-list/character-list';




@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuperPage {



  characteres = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },

  ]);


  addCharacter($event: Character) { // Method to add a new character. how works this? receives the event emitted from the child component
    this.characteres.update(characters => [...characters, $event]);
}



}
