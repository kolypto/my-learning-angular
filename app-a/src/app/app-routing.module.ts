import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimersScreenComponent} from "./timer/timers-screen.component";
import {IndexComponent} from "./index.component";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  { path: 'heroes',
    loadChildren: () => import('./hero-demo/hero-demo.module').then(m => m.HeroDemoModule)},
  {path: 'timers', component: TimersScreenComponent},
  { path: 'rxjs-playground', loadChildren: () => import('./rxjs-playground/rxjs-playground.module').then(m => m.RxjsPlaygroundModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
