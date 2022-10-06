import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
