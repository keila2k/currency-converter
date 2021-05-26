import {ActionReducer, INIT, MetaReducer} from '@ngrx/store';
import {CurrencyState} from './currencyReducer';

export const hydrationMetaReducer = (
  reducer: ActionReducer<CurrencyState>
): ActionReducer<CurrencyState> => {
  return (state, action) => {
    if (action.type === INIT) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
