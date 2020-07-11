import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./navbar/nav-bar.component";
import {environment} from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ActiveRouteService} from "./service/active-route.service";
import {DataService} from "./service/data.service";
import {Route1Component} from "./route1/route1.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Route1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebase-workshop'),
    AngularFirestoreModule,
    HttpClientModule,
    NgbModule,
    AngularFireStorageModule
  ],
  providers: [ActiveRouteService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
