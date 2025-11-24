import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumerPage { 
  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);

}
