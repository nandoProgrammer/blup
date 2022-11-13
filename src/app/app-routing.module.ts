import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login/login.component';
import { CreateAccountComponent } from './pages/login/create-account/create-account.component';
import { VerifyEmailComponent } from './pages/login/verify-email/verify-email.component';
import { NewPasswordComponent } from './pages/login/new-password/new-password.component';

import { MainComponent } from './pages/dashboard/main/main.component';

import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/not-auth.guard';

const routes: Routes = [
    {
      path: 'login',
      canActivate: [NotAuthGuard],
      loadChildren: () => import('./pages/login/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'login/create-account',
      component: CreateAccountComponent,
      canActivate: [NotAuthGuard],
      loadChildren: () => import('./pages/login/create-account/create-account.module').then(m => m.CreateAccountModule)
    },
    {
      path: 'login/new-password',
      component: NewPasswordComponent,
      canActivate: [NotAuthGuard],
      loadChildren: () => import('./pages/login/new-password/new-password.module').then(m => m.NewPasswordModule)
    },
    {
      path: 'login/verify-email',
      component: VerifyEmailComponent,
      canActivate: [NotAuthGuard],
      loadChildren: () => import('./pages/login/verify-email/verify-email.module').then(m => m.VerifyEmailModule)
    },
    {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () => import('./pages/dashboard/main/main.module').then(m => m.MainComponentModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
