import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../../components/side/menu/menu';



@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, Menu],
  templateUrl: './dashboard-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class DashboardPage { }
