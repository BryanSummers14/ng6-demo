import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-demo-card-loading',
  template: `
    <section class="card-container">
    </section>
  `,
  styles: [`
    .card-container {
      height: 240px;
      background-color: #ccc;
      box-shadow: -4px 10px 12px 0px rgba(0,0,0,0.75);
      animation: fader 2s infinite
    }
    @keyframes fader {
        0%   { opacity: 1; }
        10% { opacity: .8; }
        25% { opacity: .4; }
        50% { opacity: 0;  }
        60% { opacity: .4; }
        75% { opacity: .8; }
        100% { opacity: 1; }
    }
  `]
})
export class DemoCardLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
