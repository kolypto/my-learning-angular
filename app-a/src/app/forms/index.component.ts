import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-forms-index',
  template: `
    <h1>Reactive forms</h1>
    <app-forms-reactive></app-forms-reactive>

    <h1>Template forms</h1>
  `,
  styles: [`
  `]
})
export class IndexComponent {
  constructor() { }
}
