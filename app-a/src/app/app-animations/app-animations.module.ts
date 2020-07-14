import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAnimationsRoutingModule } from './app-animations-routing.module';
import { AppAnimationsComponent } from './app-animations.component';


@NgModule({
  declarations: [AppAnimationsComponent],
  imports: [
    CommonModule,
    AppAnimationsRoutingModule
  ]
})
export class AppAnimationsModule { }
