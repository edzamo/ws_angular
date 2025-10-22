import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  characters = input.required<Character[]>(); // Input property to receive the list of characters
  listName = signal('Lista de personajes'); // Signal for the list name
}
