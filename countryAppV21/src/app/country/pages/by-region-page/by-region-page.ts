import { ChangeDetectionStrategy, Component } from '@angular/core';
import { List } from "../../component/list/list";

@Component({
  selector: 'app-by-region-page',
  imports: [List],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage { }
