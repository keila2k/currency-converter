import {createFeatureSelector, createSelector} from '@ngrx/store';
import {currencyFeatureKey, CurrencyState} from '../reducer/currencyReducer';

export const selectCurrencyState = createFeatureSelector<CurrencyState>(
  currencyFeatureKey,
);
export const selectCurrencyConversions = createSelector(
  selectCurrencyState,
  (state: CurrencyState) => state.currencyConversions
);
