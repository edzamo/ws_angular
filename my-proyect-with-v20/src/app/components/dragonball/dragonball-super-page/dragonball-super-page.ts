import { Component, inject } from '@angular/core';

import { DragonballCharacterAdd } from '../dragonball-character-add/dragonball-character-add';
import { CharacterList } from '../../character-list/character-list';
import { DragonballService } from '../service/dragonball-service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuperPage {
  /*
constructor() {
  private dragonballService :DragonballService;


}
*/

  public dragonballService = inject(DragonballService);


}
