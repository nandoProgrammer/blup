import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../components/header/header.module';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { EditUserComponent } from './views/edit-user/edit-user.component';
@NgModule({
  declarations: [MainComponent, EditUserComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MainRoutingModule
  ]
})

export class MainComponentModule { }
