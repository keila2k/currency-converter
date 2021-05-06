import {Component, OnInit} from '@angular/core';
import {WeatherState} from '../../weather/store/reducer/weather.reducer';
import {select, Store} from '@ngrx/store';
import {WeatherService} from '../../weather.service';
import {selectWeathers} from '../../weather/store/selector/weather.selectors';
import {Observable} from 'rxjs';
import {Weather} from '../../models/weather';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

const CITIES = ['Tel Aviv', 'Kyiv'];

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weathers: Observable<Weather[]>;
  formGroupsWeathers: FormGroup[];
  newWeatherForm: FormGroup;
  cities: string[] = CITIES;

  constructor(private store: Store<WeatherState>, private weatherService: WeatherService) {
    this.weathers = this.store.pipe(select(selectWeathers));
  }

  ngOnInit(): void {
    this.newWeatherForm = new FormGroup({
      city: new FormControl('', [Validators.required]),
      units: new FormControl('', [Validators.required])
    });
    this.weathers.subscribe(weathers => {
      this.formGroupsWeathers = weathers.map(weather => new FormGroup({
        city: new FormControl(weather.city, []),
        units: new FormControl(weather.units, [])
      }));
    });
  }

  onNewWeather() {
    if (!this.newWeatherForm.valid) {
      return;
    }
    const {city, units} = this.newWeatherForm.value;
    this.weatherService.getWeatherData({city, units});
    this.newWeatherForm.reset();
  }

  getImageSrc(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}@4x.png`;
  }
}
