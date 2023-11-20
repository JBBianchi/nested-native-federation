import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { loadRemoteModule, processRemoteInfo } from '@angular-architects/native-federation';
import { NavComponent } from './nav.component';

fetch('/assets/federation.manifest.json')
  .then(res => res.json())
  .then(remotes => Promise.all(Object.keys(remotes).map(remoteName => {
    const url = remotes[remoteName];
    return processRemoteInfo(url, remoteName);
  })));

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