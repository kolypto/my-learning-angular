import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>Hero List</h1>
    <app-demo-hero-list></app-demo-hero-list>

    <h1>App Demo Template Reference</h1>
    <app-demo-template-reference></app-demo-template-reference>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
}
