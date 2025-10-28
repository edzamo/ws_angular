import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'menu-header',
  imports: [],
  templateUrl: './menu-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHeader { 

envs= environment;

}
