import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constants} from "./utils/constants";
import {Route1Component} from "./route1/route1.component";
import {LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: `/${Constants.routes[0].url}`,
    pathMatch: 'full'
  },
  {
    path: `${Constants.routes[0].url}`,
    component: Route1Component
  },
  {
    path: `${Constants.routes[1].url}`,
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
