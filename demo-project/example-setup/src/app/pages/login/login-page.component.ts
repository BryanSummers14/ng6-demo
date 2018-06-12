import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hasError: any;

  login = true
  register = false;

  constructor(private af: AngularFireAuth, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.af.authState.subscribe(_res => {
      if (_res) {
        this.router.navigate(['chatter']);
      }
    })
  }

  handleLogin($event) {
    this.authService.emailLogin($event)
      .then(_data => { this.router.navigate(['chatter']); })
      .catch(error => { this.hasError = true; });
  }

  handleRegister($event) {
    this.authService.emailRegister($event)
      .then(_data => { this.router.navigate(['chatter']); })
      .catch(error => { this.hasError = true; });
  }

  handleReset() {
    this.hasError = false;
  }

  switchState() {
    this.login = !this.login;
    this.register = !this.register;
    this.hasError = false;
  }

}
