import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { Character } from '../../interfaces/character';


@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballCharacterAdd {

  name = signal('Gohan');
  power = signal(100);

  newCharacter = output<Character>();



    addCharacter() {
      const newCharacter: Character = {
        id: Math.floor(Math.random() * 10000), // Generate a random ID for the new character
        name: this.name(),
        power: Number(this.power()),
      };

      console.log(newCharacter);
      this.newCharacter.emit(newCharacter);
    }


  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });



  
}
