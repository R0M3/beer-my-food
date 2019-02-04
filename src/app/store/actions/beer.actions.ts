import { Action } from '@ngrx/store'
import { IBeer } from '../../models/beer.interface'

export enum EBeerActions {
    GetBeers = 'Get Beers',
    GetBeersSuccess = 'Get Beers Success',
}

export class GetBeers implements Action {
    public readonly type = EBeerActions.GetBeers;
    constructor(public payload: string) {}
}

export class GetBeersSuccess implements Action {
    public readonly type = EBeerActions.GetBeersSuccess;
    constructor(public payload: IBeer[]) {}
}

export type BeerActions = GetBeers | GetBeersSuccess;