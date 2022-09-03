import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
   
  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
