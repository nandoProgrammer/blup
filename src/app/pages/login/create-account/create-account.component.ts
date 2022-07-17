import { Component, OnInit } from '@angular/core';
import  { AbstractControl, FormBuilder, FormGroup, Validators }  from  '@angular/forms';

import { FormValidations } from 'src/app/core/classes/FormValidations';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['../login.css', './create-account.component.css']
})

export class CreateAccountComponent implements OnInit {


  sex: Array<{sex: string, name: string}> = [
    {sex: 'MASC', name: 'Masculino'},
    {sex: 'FEM', name: 'Feminino'},
    {sex: 'OTHER', name: 'Outro'},
  ];

  formCreateUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit():void {
    this.createForm();
  }

  createForm():void {
    this.formCreateUser = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8), FormValidations.equalsTo('password')]],
      dateBirth: ['', Validators.required],
      sex: ['', Validators.required],
    })
  }

  fCreateUser(campo: string):AbstractControl {
    return this.formCreateUser.get(campo);
  }

  createUser():void {
    console.log(this.formCreateUser.value);
  }


}
