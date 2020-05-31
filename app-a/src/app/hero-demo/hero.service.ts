import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {Observable} from "rxjs";

@Injectable({
  // specify the provider of the decorated service class with the root injector, or with the injector for a specific NgModule.
  providedIn: 'root',
})
export class HeroService {
  constructor() { }

  heroes: Observable<Array<Hero>> = new Observable((observer) => {
    observer.next([
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ]);
    return {
      unsubscribe(){}
    }
  });
}
