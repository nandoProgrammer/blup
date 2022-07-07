import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormControl, FormGroup, Validators }  from  '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit():void {
    this.createForm()
  }

  createForm():void {
    this.formLogin = this.formBuilder.group({
       user: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  fLogin(campo: string) {
    return this.formLogin.get(campo);
  }

  auth():void {
    console.log(this.formLogin.get('user').errors)
  }

  joinUs():void {
    console.log('ok');
  }

  passwordShowHide():void {
    this.statusInputPassword = !this.statusInputPassword;
  }

}
