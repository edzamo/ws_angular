import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { List } from "../../components/list/list";

@Component({
  selector: 'search-history',
  imports: [List],
  templateUrl: './search-history.html',
})
export default class SearchHistory {

  gifService = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute)
      .params
      .pipe(
        map(params => params['query'])));


  gifSearchByKey= computed(() => this.gifService.getHistoryGifs(this.query()));



}

