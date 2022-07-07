import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['../login.css', './create-account.component.css']
})

export class CreateAccountComponent implements OnInit {

  formCreateUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCreateUser = this.formBuilder.group({

    })
  }

  createUser():void {}

  backHome():void {

  }


}
