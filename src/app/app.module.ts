import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./navbar/nav-bar.component";
import {environment} from "../environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
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
    AngularFirestore,
    AngularFireModule.initializeApp(environment.firebase, 'firebase-workshop'),
    HttpClientModule,
    NgbModule,
    AngularFireStorage
  ],
  providers: [ActiveRouteService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
