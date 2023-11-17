import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>{{ title }}</h3><p>{{ title }} works</p>`,
  styles: ``
})
export class HomeComponent {
  title = 'dashboard';
}