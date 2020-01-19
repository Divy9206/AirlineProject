import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleAuthService } from './services/google-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeAppGuard implements CanActivate {

  constructor(private authService: GoogleAuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.loggedIn) {
      return true;
    } else {
      this.router.navigate(['landing-page/login']);
      return false;
    }
  }

}
