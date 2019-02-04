import { initialBeerState, IBeerState } from '../state/beer.state';
import { BeerActions, EBeerActions } from '../actions/beer.actions';

export function beerReducers (state = initialBeerState, action: BeerActions) : IBeerState {
    switch (action.type) {
        case EBeerActions.GetBeersSuccess: {
            return {
                ...state,
                beers: action.payload
            }
        }
        default:
            return state;
    }
}