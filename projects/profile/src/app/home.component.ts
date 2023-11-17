import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-home',
  standalone: true,
  imports: [CommonModule],
  template: `<p>{{ title }} works</p>`,
  styles: ``
})
export class HomeComponent {
  title = 'profile';
}
