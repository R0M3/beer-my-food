import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { beerReducers } from './beer.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  beers: beerReducers
};