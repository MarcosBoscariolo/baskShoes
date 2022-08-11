import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-logo bg-primary">
      <a routerLink="/" class="font-l secondary">Bask Shoes</a>
    </div>
  `,
  styles: [`
    .header-logo {
      display: grid;
      justify-content: center;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
