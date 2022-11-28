import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostContentComponent } from './post-content.component';

@NgModule({
  declarations: [PostContentComponent],
  imports: [
    CommonModule
  ],
  exports: [PostContentComponent]
})

export class PostContentComponentModule { }
