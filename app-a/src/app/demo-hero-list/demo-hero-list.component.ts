import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-demo-hero-list',
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
  styleUrls: ['./demo-hero-list.component.scss']
})
export class DemoHeroListComponent implements OnInit {
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

  ngOnInit(): void {
  }
}
