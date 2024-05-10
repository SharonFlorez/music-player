import { inject, Injectable } from '@angular/core';
import { Auth, signOut, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  loginWithCredentials({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  public isAuthenticated(): boolean {
    return true;
  }
}
