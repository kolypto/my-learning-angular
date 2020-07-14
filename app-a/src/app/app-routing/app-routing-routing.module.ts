import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingComponent } from './app-routing.component';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {UrlNotFoundComponent} from "./url-not-found/url-not-found.component";
import {PersonInfoComponent} from "./person-info/person-info.component";

const routes: Routes = [
  { path: '', component: AppRoutingComponent,
    children: [
      // Two static routes
      { path: 'first-component', component: FirstComponent },
      { path: 'second-component', component: SecondComponent },
      // A route with parameters
      { path: 'person-info', component: PersonInfoComponent },
    ]
  },
  // Wildcard route for page not found
  { path: '**', component: UrlNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
