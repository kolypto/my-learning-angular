import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { AppRoutingComponent } from './app-routing.component';


@NgModule({
  declarations: [AppRoutingComponent],
  imports: [
    CommonModule,
    AppRoutingRoutingModule
  ]
})
export class AppRoutingModule { }
