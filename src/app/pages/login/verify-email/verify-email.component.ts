import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';

@Component({
  selector: 'verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['../login.css', './verify-email.component.css']
})

export class VerifyEmailComponent implements OnInit {

  formVerifyEmail: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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
