import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('email') email: ElementRef;
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  @Input() error: any;

  @Output() register = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();
  @Output() switch = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRegister() {
    this.register.emit({ email: this.email.nativeElement.value, username: this.username.nativeElement.value, password: this.password.nativeElement.value });
  }

  onReset() {
    this.email.nativeElement.value = '';
    this.username.nativeElement.value = '';
    this.password.nativeElement.value = '';
    this.reset.emit()
  }

  switchState() {
    this.switch.emit();
  }

}
