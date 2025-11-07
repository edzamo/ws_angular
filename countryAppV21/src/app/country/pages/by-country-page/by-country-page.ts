import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInput } from "../../component/search-input/search-input";

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage { }
