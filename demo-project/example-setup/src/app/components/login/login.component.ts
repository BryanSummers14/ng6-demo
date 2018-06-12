import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  @Input() error: any;

  @Output() login = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();
  @Output() switch = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    this.login.emit({ email: this.email.nativeElement.value, password: this.password.nativeElement.value });
  }

  onReset() {
    this.email.nativeElement.value = '';
    this.password.nativeElement.value = '';
    this.reset.emit()
  }

  switchState() {
    this.switch.emit();
  }

}
