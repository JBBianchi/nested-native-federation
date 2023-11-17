import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-hello',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      hello works!
    </p>
  `,
  styles: ``
})
export class HelloComponent {

}
