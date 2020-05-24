import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-template-reference',
  template: `
    <p>
      demo-template-reference works!
    </p>
  `,
  styleUrls: ['./demo-template-reference.component.scss']
})
export class DemoTemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
