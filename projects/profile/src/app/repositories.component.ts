import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'profile-repositories',
  standalone: true,
  imports: [CommonModule],
  template: `<p>{{ title }} works</p>
  <h3>Available pets</h3>
  <ul>
    <li *ngFor="let pet of pets$|async">{{ pet }}</li>
  </ul>`,
  styles: ``
})
export class RepositoriesComponent {
  title = 'repositories';
  httpClient: HttpClient = inject(HttpClient);
  pets$ = this.httpClient.get<any>('https://petstore.swagger.io/v2/pet/findByStatus?status=available').pipe(
    map((pets: any[]) => pets.map(pet => pet.name))
  );
}
