import { Injectable } from '@angular/core';
import { Weather } from '../weather.model';
import { Forecast } from '../forescast.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlApi = 'https://query.yahooapis.com/v1/public/yql?q=';
  private selectApi_part1 = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="';
  private selectApi_part2 = '")';
  private jsonParam = '&format=json';

  constructor(
    private _http: HttpClient
  ) { }

  public getWeatherInfo(cityName: string): Observable<any> {
    const url = `${this.urlApi}${this.selectApi_part1}${cityName}${this.selectApi_part2}${this.jsonParam}`;
    return this._http.get(url);
  }

  public mapResult(result: any): Weather {
    const weatherInfo = new Weather();
    weatherInfo.city = `${result.location.city}, ${result.location.country}`;
    weatherInfo.date = result.item.condition.date;
    weatherInfo.humidity = result.atmosphere.humidity;
    weatherInfo.info = result.item.condition.text;
    weatherInfo.maxtemperature = result.item.forecast[0].high;
    weatherInfo.mintemperature = result.item.forecast[0].low;
    weatherInfo.pressure = result.atmosphere.pressure;
    weatherInfo.sunrise = result.astronomy.sunrise;
    weatherInfo.sunset = result.astronomy.sunset;
    weatherInfo.temperature = result.item.condition.temp;
    weatherInfo.winddirection = result.wind.direction;
    weatherInfo.windspeed = result.wind.speed;
    weatherInfo.forecasts = new Array<Forecast>();
    for (const forecast of result.item.forecast) {
      const newForecast = new Forecast();
      newForecast.date = forecast.date;
      newForecast.day = forecast.day;
      newForecast.maxTemperature = forecast.high;
      newForecast.minTemperature = forecast.low;
      newForecast.info = forecast.text;
      weatherInfo.forecasts.push(newForecast);
    }
    return weatherInfo;
  }

  /*
  public getWeatherInfo(cityName: string): Weather {
    const weather = new Weather();
    weather.city = 'Madrid';
    weather.date = 'Tue, 01 May 2018 06:00 PM CEST';
    weather.humidity = 32.1;
    weather.info = 'Cloudy';
    weather.maxtemperature = 90;
    weather.mintemperature = 58;
    weather.pressure = 1080;
    weather.sunrise = '6:58 am';
    weather.sunset = '23:40 pm';
    weather.temperature = 80;
    weather.winddirection = 270;
    weather.windspeed = 26;
    weather.forecast = new Forescast();
    weather.forecast.date = '04 May 2018';
    weather.forecast.day = 'Fri';
    weather.forecast.info = 'Mostly Cloudy';
    weather.forecast.maxTemperature = 88;
    weather.forecast.minTemperature = 62;
    return weather;
  }*/

}

