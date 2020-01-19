import { Injectable } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  user$: Observable<SocialUser>;
  loggedIn: boolean;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.authState;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.loggedIn = false;
    this.authService.signOut();
  }
}
