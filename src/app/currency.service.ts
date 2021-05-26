import {Injectable} from '@angular/core';
import {Currency} from './models/currency';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';

import {CurrencyConversion} from './models/currency-conversion';
import {CurrencyState} from './currency/store/reducer/currencyReducer';
import {addCurrencyConversion} from './currency/store/action/currency.actions';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=050beeaad0ad5cda72460c6758d5a11e&format=1';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http: HttpClient, private store: Store<CurrencyState>) {
  }

  async getCurrencyOpts(): Promise<{ [p: string]: number }> {
    const currencies = await this.http.get<Currency>(BASE_URL).toPromise();
    return currencies.rates;
  }

  addToCurrencyHistory(currencyConversion: CurrencyConversion) {
    this.store.dispatch(addCurrencyConversion(currencyConversion));
  }
}
