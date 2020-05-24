import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-template-reference',
  template: `
    <label>Type something:
      <input #customerInput>{{customerInput.value}}
    </label>
  `,
  styleUrls: ['./demo-template-reference.component.scss']
})
export class DemoTemplateReferenceComponent implements OnInit {
  customerInput: string;

  constructor() { }

  ngOnInit(): void {
  }

}
