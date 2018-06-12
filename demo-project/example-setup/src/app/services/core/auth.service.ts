import { Injectable } from '@angular/core';
//import { AngularFireAuth, AngularFireDatabase, FirebaseAuthState, AuthProviders, AuthMethods, AngularFire } from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  constructor(private af: AngularFireAuth, private afStore: AngularFirestore) {

    af.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  // get auth() {
  //   return this.af.authState;
  // }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.authState.auth : null;
  }
  
  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  emailRegister({ username, email, password}) {
    return this.af.auth.createUserWithEmailAndPassword(email, password)
            .then(_res => {
              return this.afStore.collection('users').doc(_res.user.uid).set({ username });
            });
  }

  emailLogin({ email, password }) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<any> {
    return this.af.auth.signOut();
  }
}
