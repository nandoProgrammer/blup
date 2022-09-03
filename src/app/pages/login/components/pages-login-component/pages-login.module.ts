import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesLoginComponent } from './pages-login.component';

@NgModule({
  declarations: [PagesLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [PagesLoginComponent]
})

export class PagesLoginModule { }