import { BeerService } from './services/beer.service';
import { Component } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectBeerList } from './store/selectors/beer.selectors';
import { GetBeers } from './store/actions/beer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public beers$ = this._store.pipe(select(selectBeerList));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetBeers(""));
  }

  public searchForBeer(searchTerm: string) {
    this._store.dispatch(new GetBeers(searchTerm));
  }
}
