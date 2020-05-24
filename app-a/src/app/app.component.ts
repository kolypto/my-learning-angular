import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tour of heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero: Hero;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
  }
}
