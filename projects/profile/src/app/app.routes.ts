import { Routes } from '@angular/router';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { UserInfoComponent } from './user-info.component';
import { RepositoriesComponent } from './repositories.component';

export const routes: Routes = [
  {
      path: '',
      component: NavComponent,
      children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'user-info',
          component: UserInfoComponent
        },
        {
          path: 'repositories',
          component: RepositoriesComponent
        }
      ]
  }  
];