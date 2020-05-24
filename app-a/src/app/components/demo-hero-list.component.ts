import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-demo-hero-list',
  template: `
    <h1>{{title}}</h1>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes; trackBy: trackByHeroes">
        <app-hero-list-item
          [hero]="hero"
          (selected)="selectHero(hero)"
        ></app-hero-list-item>
      </li>
    </ul>
    <p *ngIf="heroes!.length > 3">There are many heroes!</p>
  `,
})
export class DemoHeroListComponent {
  title = 'Tour of heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  myHero: Hero;

  @Output() selectedHero = new EventEmitter<Hero>();

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
  }

  selectHero(hero: Hero){
    this.selectedHero.emit(hero);
  }

  // Optimize long list handling
  trackByHeroes(index: number, hero: Hero): number { return hero.id; }
}
