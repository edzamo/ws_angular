import {
  ChangeDetectionStrategy,
  Component,
  inject,
  linkedSignal,
  resource,
  signal,
} from '@angular/core';
import { List } from '../../component/list/list';
import { SearchInput } from '../../component/search-input/search-input';
import { Region } from '../../interfaces/country-last-interfaces';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../service/country-service';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string): Region {
  queryParam = queryParam.toLowerCase();
  const validRegions: Record<string, Region> = {
    Africa: 'Africa',
    America: 'America',
    'Western Asia': 'Western Asia',
    'Southeast Europe': 'Southeast Europe',
    Micronesia: 'Micronesia',
  };

  return validRegions[queryParam] || 'Africa';
}

@Component({
  selector: 'app-by-region-page',
  imports: [List, SearchInput],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage {
  public regions: Region[] = [
    'Africa',
    'America',
    'Western Asia',
    'Southeast Europe',
    'Micronesia',
  ];

  countryService = inject(CountryService);
  activeRouter = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activeRouter.snapshot.paramMap.get('region') ?? '';

  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam ));

  selectRegion(region: Region) {
    this.selectedRegion.set(region);
  }

  countryResource = resource({
    params: () => ({ region: this.selectedRegion() }),

    loader: async ({ params }) => {
      if (!params || !params.region) return [];

      const result = this.countryService.searchByRegion(params.region);

      // Angular signals are callable functions at runtime, Observables are objects with subscribe.
      // If the service returned a signal (cached value), call it to get the synchronous value.
      if (typeof result === 'function') {
        return (result as any)();
      }

      // Otherwise it's an Observable — await its first value.
      return await firstValueFrom(result);
    },
  });
}
