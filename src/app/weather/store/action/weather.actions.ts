import {createAction, props} from '@ngrx/store';
import {Weather} from '../../../models/weather';

export const loadWeathers = createAction(
  '[Weather] Load Weathers'
);
export const addWeather = createAction(
  '[Weather] Add Weather',
  (weather: Weather) => ({weather})
);




