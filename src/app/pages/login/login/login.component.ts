import { Component, OnInit } from '@angular/core';
import  { AbstractControl, FormBuilder, FormGroup, Validators }  from  '@angular/forms';
import { LocalStorage } from 'src/app/core/classes/localstorage';
import { AuthService } from 'src/app/core/services/auth.service';

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
    private authService: AuthService
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

    let data = {
      "user": this.formLogin.value.user,
      "password": this.formLogin.value.password,
    };

    this.authService.auth(data).subscribe(res => {
      LocalStorage.setItem('token', res.token);
    },(error) => {
      console.warn(error.message)
    })
    
  }

  passwordShowHide():void {
    this.statusInputPassword = !this.statusInputPassword;
  }

}
