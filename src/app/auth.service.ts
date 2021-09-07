import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

import firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  user: Observable<firebase.User | null>;
  authError: any;

  constructor(public firebaseAuth: AngularFireAuth, public logger: LoggerService) {
    this.user = firebaseAuth.authState;

    this.logger.add('AuthService constructed');
  }

  loginWithEmail(email: string, password: string) {
    let thisService = this;
    thisService.authError = null;
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log("Logged in email and password");
      })
      .catch(function(error) {
        console.log(error.message);
        thisService.authError = error;
      });
  }

  loginWithGoogle() {
    let thisService = this;
    thisService.authError = null;
    this.firebaseAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(value => {
        console.log("Logged in using Google");
      })
      .catch(function(error) {
        console.log(error.message);
        thisService.authError = error;
      });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}
