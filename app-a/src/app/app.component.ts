import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>Hero List</h1>
    <app-demo-hero-list (selectedHero)="favoriteHero=$event"></app-demo-hero-list>
    <div *ngIf="favoriteHero">Favorite: {{favoriteHero.name}}</div>

    <h1>App Demo Template Reference</h1>
    <app-demo-template-reference></app-demo-template-reference>
  `,
})

export class AppComponent {
  favoriteHero;
}
