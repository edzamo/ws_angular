import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {


  characteres = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);


  saveLocalStorage= effect(() => {
    console.log(`character count: ${this.characteres().length}`);

    localStorage.setItem('characteres', JSON.stringify(this.characteres()));
   console.log(`read characters: ${loadFromLocalStorage()}`);

    
  });
  

  addCharacter(character: Character) {
    // Method to add a new character. how works this? receives the event emitted from the child component
    this.characteres.update((characters) => [...characters, character]);
  }
}

function loadFromLocalStorage(): Character[] {

  const data = localStorage.getItem('characteres');
  return data ? JSON.parse(data) : [];
  
}
