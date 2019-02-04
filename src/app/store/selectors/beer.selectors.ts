import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IBeerState } from '../state/beer.state';

const selectBeers = (state: IAppState) => state.beers;

export const selectBeerList = createSelector(
  selectBeers,
  (state: IBeerState) => state.beers
);
