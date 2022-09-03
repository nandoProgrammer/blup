import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators }  from  '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { LocalStorage } from 'src/app/core/classes/LocalStorage';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  statusInputPassword: boolean = false;
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Blupr - Fazer Login');
  }

  ngOnInit():void {
    this.createForm();
  }

  createForm():void {
    this.formLogin = this.formBuilder.group({
       user: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  fLogin(field: string):AbstractControl {
    return this.formLogin.get(field);
  }

  cssError(field: string):boolean {
    return !!this.fLogin(field).errors && this.formLogin.get(field).touched;
  }

  auth():void {

    let data = {
      "user": this.formLogin.value.user,
      "password": this.formLogin.value.password,
    };

    this.authService.auth(data)
    .subscribe(res => {

      LocalStorage.setItem('token', res.token);
      this.router.navigate(['/']);

    },(error) => {

      throw new Error(error.message);

    })
    
  }

  passwordShowHide():void {
    this.statusInputPassword = !this.statusInputPassword;
  }

}
