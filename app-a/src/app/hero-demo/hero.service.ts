import { Injectable } from '@angular/core';
import {Hero} from "./hero";

@Injectable({
  // specify the provider of the decorated service class with the root injector, or with the injector for a specific NgModule.
  providedIn: 'root',
})
export class HeroService {
  constructor() { }

  getHeroes(){
    return [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
  }
}
