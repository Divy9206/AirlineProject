import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../services/google-auth.service';
import { filter, map, tap, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: GoogleAuthService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.signInWithGoogle();
    this.authService.loggedIn = true;
    this.authService.user$.pipe(
      filter((x: SocialUser) => !!x),
      tap(x => {
        this.router.navigateByUrl('landing-page');
      })
    ).subscribe();
  }

}
