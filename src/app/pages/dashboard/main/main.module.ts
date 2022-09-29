import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../components/header/header.module';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MainRoutingModule
  ]
})

export class MainComponentModule { }
