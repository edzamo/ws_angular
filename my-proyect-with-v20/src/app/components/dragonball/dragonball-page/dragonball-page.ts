import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/character';



@Component({
  selector: 'app-dragonball-page',
 // imports: [NgClass], // standalone component only use when needed ngClass in the frontend
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPage {

  name = signal('Gohan');
  power = signal(100);

  characteres = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 7000 },
    { id: 4, name: 'Gohan', power: 6500 },
    { id: 5, name: 'Goten', power: 6000 },
    { id: 6, name: 'Trunks', power: 5500 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

addCharacter() {
  if ( !this.name() || !this.power()|| this.power() <= 0) return;
  const newCharacter: Character = {
    id: this.characteres().length + 1,
    name: this.name(),
    power: Number(this.power())
  };
  this.characteres.update(chars => [...chars, newCharacter]);
  //this.characteres.push(newCharacter);
}

}
