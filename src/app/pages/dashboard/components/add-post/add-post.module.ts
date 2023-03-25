import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostComponent } from './add-post.component';

@NgModule({
  declarations: [AddPostComponent],
  imports: [
    CommonModule
  ],
  exports: [AddPostComponent]
})

export class AddPostComponentModule { }
