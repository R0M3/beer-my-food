import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private baseUrl: string = "https://api.punkapi.com/v2/";

  constructor(private http: HttpClient) { }

  public getAllBeers() {
    const url = `${this.baseUrl}beers/`
    return this.http.get(url);
  }

  public getBeer(food: string): Observable<any> {
    const searchString = food.split(" ").join("_");
    const url = `${this.baseUrl}beers?food=${searchString}`
    return this.http.get(url);
  }

}
