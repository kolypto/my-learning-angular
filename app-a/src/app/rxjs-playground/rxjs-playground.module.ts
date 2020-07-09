import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsPlaygroundRoutingModule } from './rxjs-playground-routing.module';
import { RxjsPlaygroundComponent } from './rxjs-playground.component';


@NgModule({
  declarations: [RxjsPlaygroundComponent],
  imports: [
    CommonModule,
    RxjsPlaygroundRoutingModule
  ]
})
export class RxjsPlaygroundModule { }
