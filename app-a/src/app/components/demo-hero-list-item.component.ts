import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-list-item',
  template: `
    <span [style.color]="hero.deleted?'red':'inherit'">{{ hero.name }}</span>
    <span *ngIf="hero.deleted">(removed)</span>
    <a (click)="deleteHero(hero)">[x]</a>
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
