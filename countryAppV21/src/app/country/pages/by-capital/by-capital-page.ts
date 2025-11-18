import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from '../../component/search-input/search-input';
import { List } from '../../component/list/list';
import { CountryService } from '../../service/country-service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInput, List],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService);
  activedRouter= inject(ActivatedRoute);
  router= inject(Router);


  queryParam = this.activedRouter.snapshot.paramMap.get('query') ?? '';

  query = signal(this.queryParam);

  countryResource = resource({
    params: () => ({ query: this.query() }),

    loader: async ({ params }) => {
      if (!params) return [];

      console.log('Loader ByCapitalPage with query:', params);

      // Navega programáticamente a la ruta '/country/by-capital' y añade
      // el parámetro de consulta `query` con el valor actual (`params.query`).
      // Esto actualiza la URL (query string) para que refleje la búsqueda
      // realizada por el usuario y permite compartir/recargar esa URL.
      this.router.navigate(['/country/by-capital'], { queryParams: { query: params.query } }  );

      return await firstValueFrom(this.countryService.searchByCapital(params.query));
    },
  });

  /*


/**
 
//usanado Observable
countryResource = rxResource({
  params: () => ({ query: this.query() }),

  loader: ({ params }) => {
    if (!params.query) return of( []);
    return this.countryService.searchByCapital(params.query);
  },

})
//////
  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(txtSearch: string) {
    if (this.isLoading()) return; //si ya tiene info no haga nada para evitar repeticiones

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(txtSearch).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.isError.set(`No results found for '${txtSearch}' in '${err.message}' `);
        this.countries.set([]);
      },
    });
  }*/
}
