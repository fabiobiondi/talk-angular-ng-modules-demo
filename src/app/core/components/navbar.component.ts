import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-navbar',
  template: `
    <div style="margin-bottom: 30px">
      <span routerLink="home" routerLinkActive="text-active" class="text-1 button">Home</span>
      <span routerLink="catalog" routerLinkActive="text-active" class="text-1 button">Catalog</span>
      <span routerLink="contacts" routerLinkActive="text-active" class="text-1 button">Contacts</span>
    </div>
  `,
  styles: [`
    .button {padding: 0.5rem;}
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
