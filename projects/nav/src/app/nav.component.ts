import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
  <h3>{{ title }}</h3>
  <nav>
    <ul>
      <li><a [routerLink]="['']">Home</a></li>
      <li><a routerLink="dashboard">Dashboard</a></li>
      <li><a routerLink="profile">Profile</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>`,
  styles: ``
})
export class NavComponent {
  title = 'nav app';
}
