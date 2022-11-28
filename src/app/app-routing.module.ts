import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/not-auth.guard';

import { LoginComponent } from './pages/login/main/login.component';
import { MainComponent } from './pages/dashboard/main/main.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [NotAuthGuard],
      loadChildren: () => import('./pages/login/main/login.module').then(m => m.LoginComponentModule)
    },
    {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
      loadChildren: () => import('./pages/dashboard/main/main.module').then(m => m.MainComponentModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
