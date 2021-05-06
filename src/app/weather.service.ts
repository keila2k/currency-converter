import {Injectable} from '@angular/core';
import {Weather} from './models/weather';
import {HttpClient, HttpParams} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import {WeatherState} from './weather/store/reducer/weather.reducer';
import {selectWeathers} from './weather/store/selector/weather.selectors';
import {addWeather} from './weather/store/action/weather.actions';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const APP_ID = '0d7303c17ee3d3482cd82a2ad273a90d';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient, private store: Store<WeatherState>) {
  }

  async getWeatherData(weather: Weather): Promise<Weather> {
    const params: HttpParams = new HttpParams()
      .append('q', weather.city)
      .append('units', weather.units)
      .append('appid', APP_ID);
    const response: any = await this.http.get(`${BASE_URL}`, {params}).toPromise();
    const newWeather: Weather = {
      ...weather,
      temperature: response.main.temp,
      description: response.weather[0].description,
      icon: response.weather[0].icon
    };
    this.addWeather(newWeather);
    return newWeather;
  }

  getWeathers() {
    return this.store.pipe(select(selectWeathers));
  }

  addWeather(weather: Weather) {
    this.store.dispatch(addWeather(weather));
  }
}
