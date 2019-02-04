import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import {
  GetBeersSuccess,
  EBeerActions,
  GetBeers
} from '../actions/beer.actions';
import { BeerService } from '../../services/beer.service';

@Injectable()
export class BeerEffects {
  constructor(
    private _beerService: BeerService,
    private _actions$: Actions
  ) {}

  @Effect()
  getBeers$ = this._actions$.pipe(
    ofType<GetBeers>(EBeerActions.GetBeers),
    map(action => action.payload),
    switchMap(searchString => {
      if (searchString === "") {
        return this._beerService.getAllBeers()
      }
      return this._beerService.getBeer(searchString);
    }),
    switchMap((beers) => of(new GetBeersSuccess(beers)))
  );
}
