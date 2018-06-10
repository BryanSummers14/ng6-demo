import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ng-animate';

@Component({
  selector: 'lib-demo-card',
  template: `
    <section class="card-container" [@enter]="enter">
      <ng-content></ng-content>
    </section>
  `,
  styles: [`
    .card-container {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      padding: 16px;
      margin: 12px;
      background-color: #ccc;
      box-shadow: -4px 10px 12px 0px rgba(0,0,0,0.75);
    }
  `],
  animations: [
    trigger('enter', [transition('* => *', useAnimation(slideInLeft))])
  ]
})
export class DemoCardComponent implements OnInit {

  enter: any;

  constructor() { }

  ngOnInit() {
  }

}
