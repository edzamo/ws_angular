import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './aboutPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage { }
