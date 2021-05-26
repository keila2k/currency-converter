import {createAction, props} from '@ngrx/store';
import {Currency} from '../../../models/currency';
import {CurrencyConversion} from '../../../models/currency-conversion';

export const loadCurrencyConversions = createAction(
  '[Currency] Load Currency conversions'
);
export const addCurrencyConversion = createAction(
  '[Currency] Add Currency conversion',
  (currencyConversion: CurrencyConversion) => ({currencyConversion})
);




