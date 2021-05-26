import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer, currencyFeatureKey} from './store/reducer/currencyReducer';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CurrencyConverterComponent} from '../components/currency-converter/currency-converter.component';

@NgModule({
  declarations: [CurrencyConverterComponent],
  exports: [
    CurrencyConverterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(currencyFeatureKey, reducer),
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CurrencyModule {
}
