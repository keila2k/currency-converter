import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CurrencyService} from '../../currency.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelValue} from '../../models/LabelValue';
import {CurrencyState} from '../../currency/store/reducer/currencyReducer';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currencyForm: FormGroup;
  currencyOpts: LabelValue[];

  constructor(private store: Store<CurrencyState>, private currencyService: CurrencyService) {
  }

  async ngOnInit() {
    const rates: { [p: string]: number } = await this.currencyService.getCurrencyOpts();
    this.currencyOpts = Object.keys(rates).map(key => new LabelValue(key, rates[key]));
    this.currencyForm = new FormGroup({
      value: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required])
    });
  }

  onNewCurrencyConversion() {
    if (!this.currencyForm.valid) {
      return;
    }
    const {from, to, value} = this.currencyForm.value;
    this.currencyService.addToCurrencyHistory({
      from: new LabelValue(from.label, value),
      to: new LabelValue(to.label, this.getToValue(from.value, to.value, value))
    });
  }

  getToValue(from: number, to: number, value: number): number {
    return (to / from) * value;
  }
}
