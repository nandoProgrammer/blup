import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from  '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  statusInputPassword: boolean = false;
  formLogin: FormGroup;
  loading: boolean = false;

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

  get fLogin() {
    return this.formLogin.controls;
  }

  auth():void {
    if(this.formLogin.invalid) return;

    this.loading = true;

    const data = {
      "email": this.formLogin.value.user,
      "password": this.formLogin.value.password,
    };

    this.authService.auth(data).subscribe({
      next: (res) => {
        this.loading = false;
        this.router.navigate(['/feed']);
      }, 
      error: (error) => {
        this.loading = false;
        throw new Error(error.message);
      }
    })
  }

  passwordShowHide():void {
    this.statusInputPassword = !this.statusInputPassword;
  }

}
