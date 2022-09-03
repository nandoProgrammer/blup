import { Component, OnInit } from '@angular/core';
import  { AbstractControl, FormBuilder, FormGroup, Validators }  from  '@angular/forms';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['../components/pages-login-component/pages-login.component.css','./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  formNewPassword: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle('Blupr - Nova Senha');
  }

  ngOnInit():void {
    this.createForm()
  }

  createForm() {
    this.formNewPassword = this.formBuilder.group({
       user: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  fNewPassword(campo: string): AbstractControl{
    return this.formNewPassword.get(campo);
  }

  resetPassword():void {
    console.log(this.formNewPassword.value);
  }


}
