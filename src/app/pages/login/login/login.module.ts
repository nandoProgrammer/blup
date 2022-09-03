import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesLoginModule } from '../components/pages-login-component/pages-login.module'; 
import { ButtonModule } from '../components/button/button.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PagesLoginModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})

export class LoginModule { }
