import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'profile-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `<h3>{{ title }}</h3><nav>
    <ul>
      <li><a routerLink="user-info">User Info</a></li>
      <li><a routerLink="repositories">Repositories</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>`,
  styles: ``
})
export class NavComponent {
  title = 'profile app';
}
