import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrencyConverterComponent} from './components/currency-converter/currency-converter.component';
import {CurrencyConversionHistoryComponent} from './components/currency-conversion-history/currency-conversion-history.component';

const routes: Routes = [
  {path: '', redirectTo: 'converter', pathMatch: 'prefix'},
  {path: 'converter', component: CurrencyConverterComponent},
  {path: 'about', component: CurrencyConversionHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
