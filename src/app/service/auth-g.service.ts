import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: FirebaseService) { }
    canActivate() {
        if ( this.authService.isLoggedIn() ) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
