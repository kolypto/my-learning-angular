import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsPlaygroundRoutingModule } from './rxjs-playground-routing.module';
import { RxjsPlaygroundComponent } from './rxjs-playground.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [RxjsPlaygroundComponent, LocationComponent],
  imports: [
    CommonModule,
    RxjsPlaygroundRoutingModule
  ]
})
export class RxjsPlaygroundModule { }
