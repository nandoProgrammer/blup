import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})

export class HeaderModule { }
