import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user != null) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .signOut();
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
}
