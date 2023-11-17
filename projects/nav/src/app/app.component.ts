import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

// Export routes as default so the standalone component compiled module can be loaded with loadChildren
import { routes } from './app.routes';
export default routes;

// Or could manually be loaded via loadComponent
@Component({
  selector: 'nav-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `<router-outlet></router-outlet>`,
  styles: []})
export class AppComponent {
}
