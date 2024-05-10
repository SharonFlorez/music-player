import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { LoginComponent } from './layout/public-layout/login/login.component';

export const AppRouting: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: PrivateLayoutComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/login'])),
      },
      {
        path: `login`,
        component: LoginComponent,
      },
    ],
  },
];
