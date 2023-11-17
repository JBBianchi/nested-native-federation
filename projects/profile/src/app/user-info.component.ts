import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `<p>{{ title }} works</p>`,
  styles: ``
})
export class UserInfoComponent {
  title = 'user info';
}
