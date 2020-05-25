import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-forms-index',
  template: `
    Template:
    <input type="text" [(ngModel)]="inputValue"> {{inputValue}}

    Reactive:
    <input type="text" [formControl]="inputControl"> {{inputControl.value}}
  `,
  styles: [`
  `]
})
export class IndexComponent {
  // Template form: simple value
  inputValue = '';
  // Reactive form: control object
  inputControl = new FormControl('');

  constructor() { }
}
