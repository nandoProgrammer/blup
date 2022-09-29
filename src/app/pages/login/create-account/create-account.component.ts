import { Component, OnInit } from '@angular/core';
import  { AbstractControl, FormBuilder, FormGroup, Validators }  from  '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { FormValidations } from 'src/app/core/classes/FormValidations';

import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['../components/pages-login-component/pages-login.component.css','./create-account.component.css']
})

export class CreateAccountComponent implements OnInit {

  sex: Array<{sex: string, name: string}> = [
    {sex: 'MASC', name: 'Masculino'},
    {sex: 'FEM', name: 'Feminino'},
    {sex: 'OTHER', name: 'Outro'},
  ];

  sexValue: string;
  formCreateUser: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('Blupr - Criar Conta');
  }

  ngOnInit():void {
    this.createForm();
    console.log(this.formCreateUser.controls['email'].errors)
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

  compareFn = (a, b) => a.status === b.status;

  get fCreateUser() {
    return this.formCreateUser.controls;
  }

  createUser():void {
    let data = this.formCreateUser.value;

    this.userService.createUser(data)
    .subscribe(res => {
       this.router.navigate(['/login']);
    },
    (error) => {
       throw new Error(error.message);
    })
  }


}
