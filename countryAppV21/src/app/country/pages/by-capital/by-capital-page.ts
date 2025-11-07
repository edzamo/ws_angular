import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInput } from "../../component/search-input/search-input";
import { List } from "../../component/list/list";

@Component({
  selector: 'app-by-capital',
  imports: [SearchInput, List],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {


onSearch(txtSearch: string) {
console.log(txtSearch);
}
}
