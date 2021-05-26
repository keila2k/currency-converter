import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {CurrencyConversion} from '../../models/currency-conversion';
import {CurrencyState} from '../../currency/store/reducer/currencyReducer';
import {selectCurrencyConversions} from '../../currency/store/selector/currency.selectors';

@Component({
  selector: 'app-currency-conversion-history',
  templateUrl: './currency-conversion-history.component.html',
  styleUrls: ['./currency-conversion-history.component.scss']
})
export class CurrencyConversionHistoryComponent implements OnInit {
  currencyConversions: Observable<CurrencyConversion[]>;

  constructor(private store: Store<CurrencyState>) {
  }

  ngOnInit(): void {
    this.currencyConversions = this.store.pipe(select(selectCurrencyConversions));

  }

}
