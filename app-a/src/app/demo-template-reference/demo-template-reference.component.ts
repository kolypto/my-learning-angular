import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-template-reference',
  template: `
    <label>Type something:
      <input #customerInput>{{customerInput.value}}
    </label>
  `,
})
export class DemoTemplateReferenceComponent implements OnInit {
  customerInput: string;

  constructor() { }

  ngOnInit(): void {
  }

}
