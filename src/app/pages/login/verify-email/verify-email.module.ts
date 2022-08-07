import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VerifyEmailComponent } from './verify-email.component';
import { VerifyEmailRoutingModule } from './verify-email-routing.module';

import { ButtonModule } from '../components/button/button.module';

@NgModule({
  declarations: [VerifyEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VerifyEmailRoutingModule,
    ButtonModule
  ]
})
export class VerifyEmailModule { }