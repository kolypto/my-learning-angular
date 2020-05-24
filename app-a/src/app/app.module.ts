import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoTemplateReferenceComponent } from './demo-template-reference/demo-template-reference.component';
import { DemoHeroListComponent } from './demo-hero-list/demo-hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTemplateReferenceComponent,
    DemoHeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
