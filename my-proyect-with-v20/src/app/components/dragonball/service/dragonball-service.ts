import { Injectable, signal } from '@angular/core';
import { Character } from '../../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  constructor() {}

  characteres = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

  addCharacter($event: Character) {
    // Method to add a new character. how works this? receives the event emitted from the child component
    this.characteres.update((characters) => [...characters, $event]);
  }
}
