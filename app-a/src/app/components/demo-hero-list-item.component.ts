import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-list-item',
  template: `
    <span [style.text-decoration]="hero.deleted? 'line-through': ''">{{ hero.name }}</span>
    <a *ngIf="!hero.deleted" (click)="deleteHero(hero)">[x]</a>
  `,
})
export class DemoHeroListItemComponent {
  @Input()
  hero: Hero;

  constructor() {
  }

  deleteHero(hero: Hero){
    hero.deleted = true;
  }
}
