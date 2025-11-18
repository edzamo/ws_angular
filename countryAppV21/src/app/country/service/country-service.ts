import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ResponseCountry } from '../interfaces/country-interfaces';
import { catchError, delay, map, tap, throwError } from 'rxjs';
import { CountryMapper } from '../component/mapper/country-mapper';
import { Country, Region } from '../interfaces/country-last-interfaces';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCacheRegion = new Map<string, Country[]>();

  searchByCapital(query: string) {
    return this.http.get<ResponseCountry[]>(`${API_URL}/capital/${query.toLowerCase()}`).pipe(
      map((response) => CountryMapper.mapResponseCountriesToCountries(response)),
      catchError((error) => {
        console.log('Error fetching data', error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }

  searchByCountry(query: string) {
    return this.http.get<ResponseCountry[]>(`${API_URL}/name/${query.toLowerCase()}`).pipe(
      map((response) => CountryMapper.mapResponseCountriesToCountries(response)),
      //  delay(3000), for generate delay in request
      catchError((error) => {
        console.log('Error fetching data', error);
        return throwError(() => new Error('Something went wrong '));
      })
    );
  }

  searchCountryByAlphaCode(query: string) {
    return this.http.get<ResponseCountry[]>(`${API_URL}/alpha/${query}`).pipe(
      map((country) => CountryMapper.mapResponseCountriesToCountries(country)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log(`Error fetching data    ${error}`);
        return throwError(() => new Error(`Something went wrong with: ${query}`));
      })
    );
  }

  searchByRegion(query: string) {
    if (this.queryCacheRegion.has(query)) {
      return signal(this.queryCacheRegion.get(query)!);
    }

    return this.http.get<ResponseCountry[]>(`${API_URL}/subregion/${query}`).pipe(
      map((response) => {
        const countries = CountryMapper.mapResponseCountriesToCountries(response);
        console.log('Fetching from API for region:', countries);
        return countries
      }),
      tap((countries) => {
        this.queryCacheRegion.set(query, countries);
      }),
      catchError((error) => {
        console.log('Error fetching data', error);
        return throwError(() => new Error('Something went wrong '));
      })
    );
  }
}
