import { Component, OnInit } from '@angular/core';
import  { AbstractControl, FormBuilder, FormGroup, Validators }  from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../login.css', './login.component.css']
})

export class LoginComponent implements OnInit {

  statusInputPassword: boolean = false;
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit():void {
    this.createForm();
  }

  createForm():void {
    this.formLogin = this.formBuilder.group({
       user: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  fLogin(campo: string):AbstractControl {
    return this.formLogin.get(campo);
  }

  auth():void {
    console.log(this.formLogin.value);
  }

  passwordShowHide():void {
    this.statusInputPassword = !this.statusInputPassword;
  }

}
