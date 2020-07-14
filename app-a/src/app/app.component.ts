import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
        <li><a routerLink="/timers" routerLinkActive="active">Timers</a></li>
        <li><a routerLink="/rxjs-playground" routerLinkActive="active">RxJS playground</a></li>
        <li><a routerLink="/http-client" routerLinkActive="active">HTTP Client</a></li>
        <li><a routerLink="/app-routing" routerLinkActive="active">Routing</a></li>
        <li><a routerLink="/app-animations" routerLinkActive="active">Animations</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
}
