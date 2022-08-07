import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateAccountComponent } from './create-account.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';

import { ButtonModule } from '../components/button/button.module';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateAccountRoutingModule,
    ButtonModule
  ]
})
export class CreateAccountModule { }
