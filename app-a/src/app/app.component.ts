import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tour of heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
  }
}
