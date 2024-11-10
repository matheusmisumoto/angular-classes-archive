import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential, signInWithEmailAndPassword, Auth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  user: Observable<User | null>;
  authError: any;
  auth: Auth;

  constructor(public logger: LoggerService) {
    this.auth = getAuth();
    this.user = new Observable((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(user);
      }, (error) => {
        observer.error(error);
      });
    });
    this.logger.add('AuthService constructed');
  }

  loginWithEmail(email: string, password: string) {
    let thisService = this;
    thisService.authError = null;
    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log("Logged in email and password");
      })
      .catch((error) => {
        console.log(error.message);
        thisService.authError = error;
      });
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then(() => {
        console.log("Logged in using Google");
      }).catch((error: any) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.log(errorCode, errorMessage, email, credential)
      });
  }

  logout() {
    signOut(this.auth).then(() => {
      console.log("Sign-out successful");
    }).catch((error) => {
      console.log("An error happened");
    });
  }
}
