import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

import { AuthService } from '@services/core/auth.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  user = <any>{};
  chatMessages$: any;

  @ViewChild('chat') chatRef: ElementRef;

  constructor(private authService: AuthService, private router: Router, private db: AngularFirestore) { }

  ngOnInit() {
    this.db.doc(`users/${this.authService.authState.uid}`).ref.get()
      .then(_doc => {
        this.user.name = _doc.data().username;
        this.user.id = this.authService.authState.uid;
        this.chatMessages$ = this.db.collection('messages', ref => ref.orderBy('date', 'asc')).valueChanges();
      });

  }

  sendChat(message: string) {
    if (message.length === 0) { return }
    this.db.collection('messages').add({
      username: this.user.name,
      userId: this.user.id,
      message: message,
      date: new Date().toUTCString()
    }).then(_ => { this.chatRef.nativeElement.value = '' });
  }

  logOut() {
    this.authService.signOut()
      .then(_ => {
        this.router.navigate(['/']);
      })
  }

}
