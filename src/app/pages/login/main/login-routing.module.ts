import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotAuthGuard } from 'src/app/core/guards/not-auth.guard';

import { LoginComponent } from './views/login/login.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { NewPasswordComponent } from './views/new-password/new-password.component';
import { VerifyEmailComponent } from './views/verify-email/verify-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./views/create-account/create-account.module').then(m => m.CreateAccountModule)
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./views/new-password/new-password.module').then(m => m.NewPasswordModule)
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./views/verify-email/verify-email.module').then(m => m.VerifyEmailModule)
  },
  {
    path: "**",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
