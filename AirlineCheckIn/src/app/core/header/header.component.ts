import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../services/google-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: GoogleAuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.signOut();
    this.router.navigate(['landing-page/login']);
  }
}
