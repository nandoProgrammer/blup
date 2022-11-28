import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/core/classes/LocalStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public options: Array<{option: string}> = [
    { option: 'Meu Perfil' },
  ];

  myControl = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loggout(): void {
    LocalStorage.clear();
    this.router.navigate(['/login']);
  }

}
