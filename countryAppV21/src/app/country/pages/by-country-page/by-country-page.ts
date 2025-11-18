import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../component/search-input/search-input";
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../service/country-service';
import { List } from '../../component/list/list';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, List],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {

  countryService = inject(CountryService);

  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),

    loader: async ({ params }) => {
      if (!params) return [];

      return await firstValueFrom(this.countryService.searchByCountry(params.query));
    },
  });

 }
