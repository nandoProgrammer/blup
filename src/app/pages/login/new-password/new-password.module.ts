import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewPasswordComponent } from './new-password.component';
import { NewPasswordRoutingModule } from './new-password-routing.module';

import { ButtonModule } from '../components/button/button.module';

@NgModule({
  declarations: [NewPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewPasswordRoutingModule,
    ButtonModule
  ]
})
export class NewPasswordModule { }
