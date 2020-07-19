import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from './navbar/nav-bar.component';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import {ActiveRouteService} from './service/active-route.service';
import {DataService} from './service/data.service';
import {Route1Component} from './route1/route1.component';
import {LoginComponent} from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from './service/firebase.service';
import {AuthGuard} from './service/auth-g.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    Route1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebase-workshop'),
    HttpClientModule,
    NgbModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [ActiveRouteService, DataService, AngularFireRemoteConfig, FirebaseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
