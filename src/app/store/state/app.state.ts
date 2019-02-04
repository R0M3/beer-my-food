import { IBeerState, initialBeerState } from './beer.state';

export interface IAppState {
    beers: IBeerState;
}

export const initialAppState = {
    beers: initialBeerState
}

export function getInitialState(): IAppState {
    return initialAppState;
}