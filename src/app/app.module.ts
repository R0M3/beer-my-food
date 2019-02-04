import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BeerListItemComponent } from "./components/beer-list-item/beer-list-item.component";
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { BeerService } from './services/beer.service';

import { BeerEffects } from './store/effects/beer.effects'
import { appReducers } from './store/reducers/app.reducers';


@NgModule({
  declarations: [
    AppComponent,
    BeerListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BeerEffects])
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
