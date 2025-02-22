import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'remote1-home',
    pathMatch: 'full'
  },
  {
    path: 'remote1-home',
    component: HomeComponent
  },
  {
    path: 'remote1-about',
    component: AboutComponent
  }
];
