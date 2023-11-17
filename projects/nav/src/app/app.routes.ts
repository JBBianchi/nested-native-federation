import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NavComponent } from './nav.component';

export const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    loadRemoteModule('dashboard', './Component')//.then((m) => m.AppComponent)
            },
            {
                path: 'profile',
                loadChildren: () =>
                    loadRemoteModule('profile', './Component')//.then((m) => m.AppComponent)
            },
            {
                path: '',
                component: HelloComponent,
                pathMatch: 'full'
            }
        ]
    }
  ];