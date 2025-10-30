import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { GifMapper } from '../mapper/gif.mapper';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { map, tap } from 'rxjs';

const GIF_KEY = 'searchHistory';

const gifsFromLocalStorage = () => {
  const history = localStorage.getItem(GIF_KEY);
  if (!history) return {};
  return JSON.parse(history) as Record<string, Gif[]>;
}
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  tredingGifsLoading = signal(true);
  searchHistory = signal<Record<string, Gif[]>>(gifsFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));



  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: '25',
          rating: 'G',
        },
      })
      .subscribe((response) => {
        const gifList: Gif[] = GifMapper.mapGifResponseToGifList(response.data);
        this.trendingGifs.set(gifList);
        this.tredingGifsLoading.set(false);

        console.log('The Loaded gifList', gifList);
      });
  }

  searchGifs(query: string) {
    console.log('Searching gifs with query:', query);

    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: '25',
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGifResponseToGifList(items)),
        tap((items) => {

          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items

          }));
        })
      );
  }


  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }

  saveGifsToLocalStorage = effect(() => {
    const history = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, history);
  });

}
