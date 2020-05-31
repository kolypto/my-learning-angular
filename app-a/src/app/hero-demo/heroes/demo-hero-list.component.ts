import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-demo-hero-list',
  template: `
    <h1>{{title}}</h1>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackByHeroes">
        {{i}}: <app-hero-list-item
          [hero]="hero"
          (selected)="selectHero(hero)"
        ></app-hero-list-item>
      </li>
    </ul>
    <p *ngIf="heroes!.length > 3">There are many heroes!</p>
  `,
})
export class DemoHeroListComponent implements OnInit {
  title = 'Tour of heroes';
  heroes: Array<Hero>;
  myHero: Hero;

  @Output() selectedHero = new EventEmitter<Hero>();

  constructor(private heroService: HeroService) {
    this.title = 'Tour of Heroes';
  }

  ngOnInit() {
    let self = this;
    // Load heroes from the service
    this.heroService.heroes.subscribe({
      next(heroes){
        self.heroes = heroes;
      },
      error: console.error
    })
  }

  selectHero(hero: Hero){
    this.selectedHero.emit(hero);
  }

  // Optimize long list handling
  trackByHeroes(index: number, hero: Hero): number { return hero.id; }
}
