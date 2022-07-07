import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';

@Component({
  selector: 'new-password-account',
  templateUrl: './new-password.component.html',
  styleUrls: ['../login.css', './new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

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

  newPasswordVerifyEmail(){
  }

  joinUs(){
    console.log('ok');
  }

}
