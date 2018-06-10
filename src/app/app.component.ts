import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Observable } from 'rxjs';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})
export class AppComponent {
  title = 'app';
  fadeIn: any;
  images$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.images$ = this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
