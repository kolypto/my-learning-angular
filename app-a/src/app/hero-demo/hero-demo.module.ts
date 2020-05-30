import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDemoRoutingModule } from './hero-demo-routing.module';
import { HeroDemoComponent } from './hero-demo.component';


@NgModule({
  declarations: [HeroDemoComponent],
  imports: [
    CommonModule,
    HeroDemoRoutingModule
  ]
})
export class HeroDemoModule { }
