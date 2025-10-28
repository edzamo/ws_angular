import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs';
import { GifMapper } from '../mapper/gif.mapper';
import { GiphyResponse, GiphyItem } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {


  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  tredingGifsLoading= signal(true)



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
}