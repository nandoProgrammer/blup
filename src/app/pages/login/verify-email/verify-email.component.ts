import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['../login.css', './verify-email.component.css']
})

export class VerifyEmailComponent implements OnInit {

  formVerifyEmail: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title) {
      this.titleService.setTitle('Blupr - Verificar Email');
    }

  ngOnInit():void {
    this.createForm();
  }

  createForm() {
    this.formVerifyEmail = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
    })
  }

  verifyEmail():void {
    console.log(this.formVerifyEmail.value);
  }

  fVerifyEmail(campo: string){
    return this.formVerifyEmail.get(campo);
  }

}
