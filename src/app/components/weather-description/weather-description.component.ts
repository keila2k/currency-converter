import {Component, OnInit} from '@angular/core';
import {WeatherState} from '../../weather/store/reducer/weather.reducer';
import {select, Store} from '@ngrx/store';
import {selectWeathers} from '../../weather/store/selector/weather.selectors';
import {Observable} from 'rxjs';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss']
})
export class WeatherDescriptionComponent implements OnInit {
  weathers$: Observable<Weather[]>;

  constructor(private store: Store<WeatherState>) {
  }

  ngOnInit(): void {
    this.weathers$ = this.store.pipe(select(selectWeathers));

  }

}
