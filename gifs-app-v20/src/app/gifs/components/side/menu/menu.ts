import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHeader } from "../menu-header/menu-header";
import { MenuOptions } from "../menu-options/menu-options";
import { environment } from '@environments/environment.development';



@Component({
  selector: 'menu',
  imports: [MenuHeader, MenuOptions],
  templateUrl: './menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu { 

envs= environment;

}
