import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';

@Component({
  selector: 'verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['../login.css', './verify-email.component.css']
})

export class VerifyEmailComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
       user: ['', [Validators.required, Validators.email]],
    })
  }

  fLogin(campo: string){
    return this.formLogin.get(campo);
  }

}
