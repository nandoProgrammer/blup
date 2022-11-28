import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateAccountComponent } from './create-account.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';

import { ButtonModule } from '../../../components/button/button.module';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CreateAccountRoutingModule,
    ButtonModule
  ]
})
export class CreateAccountModule { }
