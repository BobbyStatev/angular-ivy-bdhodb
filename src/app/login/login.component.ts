import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';
import { Constants } from '../utils/constants';
import { ActiveRouteService } from '../service/active-route.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public authService: FirebaseService,
              private activeRouteService: ActiveRouteService) {
    this.activeRouteService.setActiveRoute(Constants.routes[0].id);
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}
