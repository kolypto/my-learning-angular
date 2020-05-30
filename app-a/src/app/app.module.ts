import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimersScreenComponent} from "./timer/timers-screen.component";
import {CountdownTimerComponent} from "./timer/countdown-timer-component";
import {HeroDemoModule} from "./hero-demo/hero-demo.module";
import {IndexComponent} from "./index.component";

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    TimersScreenComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
