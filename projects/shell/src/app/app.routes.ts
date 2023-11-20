import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () =>
        loadRemoteModule('nav', './Routes').then(m => m.routes)
}];
