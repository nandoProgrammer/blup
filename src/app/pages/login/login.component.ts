import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: boolean = true;
  createAccount: boolean = false;
  verifyEmail: boolean = false;
  newPassword: boolean = false;
  
  statusInputPassword: boolean = false;

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
       user: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  fLogin(campo: string){
    return this.formLogin.get(campo);
  }

  ok(){
    alert("ok")
  }

  auth(){
    console.log(this.formLogin.get('user').errors)
  }

  newPasswordVerifyEmail(){
  }

  joinUs(){
    console.log('ok');
  }

  createAccountActive(){
    this.login = false;
    this.verifyEmail = false;
    this.createAccount = true;
    this.verifyEmail = false;
    this.newPassword = false;
  }

  newPasswordActive(){
    this.login = false;
    this.verifyEmail = true;
  }

  backHome(){
    this.login = true;
    this.verifyEmail = false;
    this.createAccount = false;
    this.verifyEmail = false;
    this.newPassword = false;
  }

  passwordShowHide(){
     this.statusInputPassword = !this.statusInputPassword;
  }

}
