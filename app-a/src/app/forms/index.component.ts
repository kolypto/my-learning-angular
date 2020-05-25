import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {QuestionBase} from "./dynamic/dynamic-question";
import {QuestionService} from "./dynamic/dynamic-question.service";

@Component({
  selector: 'app-forms-index',
  providers: [QuestionService],
  template: `
    <h1>Reactive forms</h1>
    <app-forms-reactive></app-forms-reactive>

    <h1>Template forms</h1>
    <app-form-template></app-form-template>

    <h1>Dynamic form</h1>
    <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
  `,
})
export class IndexComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
