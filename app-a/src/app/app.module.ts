import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoTemplateReferenceComponent } from './heroes/demo-template-reference.component';
import { DemoHeroListComponent } from './heroes/demo-hero-list.component';
import { DemoHeroListItemComponent } from "./heroes/demo-hero-list-item.component";
import {DemoHeroManagerComponent} from "./heroes/demo-hero-manager.component";
import { HeroListItemStyleDirective } from './hero-list-item-style.directive';
import { BlinkerDirective } from './heroes/blinker.directive';
import {TimersScreenComponent} from "./timer/timers-screen.component";
import {CountdownTimerComponent} from "./timer/countdown-timer-component";

@NgModule({
  declarations: [
    AppComponent,
    DemoTemplateReferenceComponent,
    DemoHeroListComponent,
    DemoHeroListItemComponent,
    DemoHeroManagerComponent,
    HeroListItemStyleDirective,
    BlinkerDirective,
    TimersScreenComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
