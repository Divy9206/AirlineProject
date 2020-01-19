import { Component } from '@angular/core';
import { GoogleAuthService } from './core/services/google-auth.service';
import { SocialUser } from 'angularx-social-login';
import { filter, switchMap, exhaustMap, switchMapTo, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirlineCheckIn';
  constructor() {
  }



}
