import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostContentComponent } from './post-content.component';

@NgModule({
  declarations: [PostContentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PostContentComponent]
})

export class PostContentComponentModule { }
