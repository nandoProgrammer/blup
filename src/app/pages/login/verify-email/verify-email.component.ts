import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';

import { UserService } from 'src/app/core/services/user.service';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['../components/pages-login-component/pages-login.component.css','./verify-email.component.css']
})

export class VerifyEmailComponent implements OnInit {

  formVerifyEmail: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title,
    private userService: UserService) {
      this.titleService.setTitle('Blupr - Verificar Email');
    }

  ngOnInit():void {
    this.createForm();
  }

  createForm() {
    this.formVerifyEmail = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
    })
  }

  resetPassword():void {
    this.userService.resetPassword(this.formVerifyEmail.value)
    .subscribe(res => {
      console.log(res)
    },error => {
      throw Error(error.message);
    })
  }

  get fVerifyEmail(){
    return this.formVerifyEmail.controls;
  }

}
