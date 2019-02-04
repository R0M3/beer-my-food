import { IBeer } from '../../models/beer.interface';

export interface IBeerState {
    beers: IBeer[];
    selectedBeer: IBeer;
}

export const initialBeerState: IBeerState = {
    beers: [],
    selectedBeer: null
}