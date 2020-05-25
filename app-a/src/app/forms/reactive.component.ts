import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forms-reactive',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label> First Name:
        <input type="text" formControlName="firstName">
      </label>

      <label> Last Name:
        <input type="text" formControlName="lastName">
      </label>

      <div formGroupName="address">
        <label>Street:
          <input type="text" formControlName="street">
        </label>

        <label>City:
          <input type="text" formControlName="city">
        </label>

        <label>State:
          <input type="text" formControlName="state">
        </label>

        <label>Zip Code:
          <input type="text" formControlName="zip">
        </label>
      </div>

      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
})
export class ReactiveComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    // Using the FormBuilder for this part (example)
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // This is how to set values through a control
    this.profileForm.get('firstName').setValue('John');

    // patchValue() fails silently for nesting errors in complex forms
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
