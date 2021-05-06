import {createFeatureSelector, createSelector} from '@ngrx/store';
import {weatherFeatureKey, WeatherState} from '../reducer/weather.reducer';

export const selectWeatherState = createFeatureSelector<WeatherState>(
  weatherFeatureKey,
);
export const selectWeathers = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.weathers
);
