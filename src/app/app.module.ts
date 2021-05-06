import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {WeatherModule} from './weather/weather.module';
import {HttpClientModule} from '@angular/common/http';
import { WeatherDescriptionComponent } from './components/weather-description/weather-description.component';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDescriptionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    WeatherModule,
    HttpClientModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
