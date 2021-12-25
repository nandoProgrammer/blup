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

  constructor() { }

  ngOnInit(): void {
  }

  ok(){
    alert('ok')
  }

  newPasswordActive(){
    this.login = false;
    this.verifyEmail = true;
  }

  backHome(){
    this.login = true;
    this.verifyEmail = false;
  }

}
