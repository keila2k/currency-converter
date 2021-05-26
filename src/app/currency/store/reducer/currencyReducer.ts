import {Action, createReducer, on} from '@ngrx/store';
import {addCurrencyConversion} from '../action/currency.actions';
import {CurrencyConversion} from '../../../models/currency-conversion';

export const currencyFeatureKey = 'currency';

export interface CurrencyState {
  currencyConversions: CurrencyConversion[];
}

export const initialState: CurrencyState = {currencyConversions: []};

export const currencyReducer = createReducer(
  initialState,
  on(addCurrencyConversion, (state, {currencyConversion}) => ({
    ...state,
    currencyConversions: [...state.currencyConversions, currencyConversion]
  }))
);

export function reducer(state: CurrencyState | undefined, action: Action): any {
  return currencyReducer(state, action);
}

