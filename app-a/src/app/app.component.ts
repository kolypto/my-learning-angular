import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
        <li><a routerLink="/timers" routerLinkActive="active">Timers</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
}
