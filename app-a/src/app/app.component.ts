import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-hero-manager></app-hero-manager>

    <h1>Heroes</h1>
      <h1>App Demo Template Reference</h1>
      <app-demo-template-reference></app-demo-template-reference>

      <app-timers-screen></app-timers-screen>
    <h1>Forms</h1>
        <app-forms-index></app-forms-index>
  `,
})

export class AppComponent {
}
