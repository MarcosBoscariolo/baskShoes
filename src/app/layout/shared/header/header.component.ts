import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-logo bg-primary">
      <a routerLink="/" class="font-l secondary">Bask Shoes</a>
    </div>
    <!-- <hr> -->
  `,
  styles: [`
    .header-logo {
      background: #121212;
      display: grid;
      justify-content: center;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    a {
      color: white;
    }
    a:hover {
      color: orange;
    }

    /* hr {
      opacity: 0.2;
    } */
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
