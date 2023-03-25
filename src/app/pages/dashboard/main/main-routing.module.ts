import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EditUserComponent } from './views/edit-user/edit-user.component';

import { FeedComponent } from './views/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    component: FeedComponent,
    loadChildren: () => import('./views/feed/feed.module').then(m => m.FeedComponentModule)
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    loadChildren: () => import('./views/edit-user/edit-user.module').then(m => m.EditUserModule)
  },
  {
    path: "**",
    component: FeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
