import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { List } from '../../components/list/list';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [List],
  templateUrl: './search-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPage {
  gifList = inject(GifsService);
  gifs = signal<Gif[]>([]);

  search(query: string) {
    this.gifList.searchGifs(query).subscribe((gifs) => {
      this.gifs.set(gifs);
    });
  }
}
