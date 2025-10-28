import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interface';

export class GifMapper {
  static mapGifResponseToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGifResponseToGifList(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGifResponseToGif);
  }
}
