import { ChangeDetectionStrategy, Component, inject, resource } from '@angular/core';
import { CountryService } from '../../service/country-service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NotFound } from "../../../shared/component/not-found/not-found";
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'app-country-page',
  imports: [NotFound, CountryInformation],
  templateUrl: './country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPage {

countryCode= inject(ActivatedRoute).snapshot.params['code'] ;



countryService = inject(CountryService);

countryResourse = resource({

  params:()=> ({code: this.countryCode}),
  loader: async ({params}) => {

    return await lastValueFrom(this.countryService.searchCountryByAlphaCode(params.code));
  }

} )

}
