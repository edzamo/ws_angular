import { ResponseCountry } from "../../interfaces/country-interfaces";
import { Country } from "../../interfaces/country-last-interfaces";

export class CountryMapper{


    static mapResponseCountryToCountry(responseCountry: ResponseCountry ): Country{
        return {
            cca2: responseCountry.cca2,
            flag: responseCountry.flags.png,
            flagSvg: responseCountry.flags.svg,
            name: responseCountry.translations['spa'].official,
            capital: responseCountry.capital[0],
            population: responseCountry.population,
            subRegion: responseCountry.subregion,
            region: responseCountry.region,
        }
        
    }

static mapResponseCountriesToCountries(responseCountries: ResponseCountry[]): Country[]{
    return responseCountries.map(countries=> this.mapResponseCountryToCountry(countries));
}


}