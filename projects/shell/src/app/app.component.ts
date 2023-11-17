import { Component, OnInit, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<!-- <ng-container *ngIf="!!dynamicComponent">
  <div *ngComponentOutlet="dynamicComponent"></div>
</ng-container>
<ng-template #componentContainer></ng-template> -->
<router-outlet></router-outlet>`,
  styles: ``
})
export class AppComponent { //implements OnInit {
  // dynamicComponent: Type<unknown> | undefined;

  // async ngOnInit() {
  //   this.dynamicComponent = await loadRemoteModule('nav', './Component').then((m) => m.AppComponent);
  // }  
}
