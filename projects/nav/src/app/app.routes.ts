import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { initFederation, loadRemoteModule, processRemoteInfo } from '@angular-architects/native-federation';
import { NavComponent } from './nav.component';



export const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    initFederation('/assets/federation.manifest.json').then(() => loadRemoteModule('dashboard', './Component'))//.then((m) => m.AppComponent)
            },
            {
                path: 'profile',
                loadChildren: () =>
                    initFederation('/assets/federation.manifest.json').then(() => loadRemoteModule('profile', './Component'))//.then((m) => m.AppComponent)
            },
            {
                path: '',
                component: HelloComponent,
                pathMatch: 'full'
            }
        ]
    }
  ];