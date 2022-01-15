import { Component, OnInit } from '@angular/core';


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

  //Inputs

  /* Login */
  loginInput: string = '';
  passwordInput: string = '';

  /* Verify Email */
  verifyEmailInput: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  ok(){
    alert("ok")
  }

  auth(){
    console.log(this.loginInput);
    console.log(this.passwordInput);
  }

  newPasswordVerifyEmail(){
    console.log(this.verifyEmailInput);
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

}
