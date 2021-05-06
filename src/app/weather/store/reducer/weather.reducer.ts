import {Action, createReducer, on} from '@ngrx/store';
import {Weather} from '../../../models/weather';
import {addWeather} from '../action/weather.actions';

export const weatherFeatureKey = 'weather';

export interface WeatherState {
  weathers: Weather[];
}

export const initialState: WeatherState = {weathers: []};

export const weatherReducer = createReducer(
  initialState,
  on(addWeather, (state, {weather}) => ({
    ...state,
    weathers: [...state.weathers, weather]
  }))
);

export function reducer(state: WeatherState | undefined, action: Action): any {
  return weatherReducer(state, action);
}

