import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer, weatherFeatureKey} from './store/reducer/weather.reducer';
import {WeatherListComponent} from '../components/weather-list/weather-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [WeatherListComponent],
  exports: [
    WeatherListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(weatherFeatureKey, reducer),
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class WeatherModule {
}
