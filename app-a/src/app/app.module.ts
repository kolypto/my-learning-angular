import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoTemplateReferenceComponent } from './components/demo-template-reference.component';
import { DemoHeroListComponent } from './components/demo-hero-list.component';
import { DemoHeroListItemComponent } from "./components/demo-hero-list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoTemplateReferenceComponent,
    DemoHeroListComponent,
    DemoHeroListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
