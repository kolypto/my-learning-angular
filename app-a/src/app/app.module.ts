import {BrowserModule} from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimersScreenComponent} from "./timer/timers-screen.component";
import {CountdownTimerComponent} from "./timer/countdown-timer-component";
import {HeroDemoModule} from "./hero-demo/hero-demo.module";
import {IndexComponent} from "./index.component";
import {APP_CONFIG, AppConfig} from "./app.config";
import { FirstComponent } from './app-routing/first/first.component';
import { SecondComponent } from './app-routing/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    TimersScreenComponent,
    IndexComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // The @Inject decorator is a constructor parameter used to specify a custom provider of a dependency.
  constructor(@Inject(APP_CONFIG) config: AppConfig) {
  }
}
