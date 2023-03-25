import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';

import { PostContentComponentModule } from '../../../components/post-content/post-content.module';
import { AddPostComponentModule } from '../../../components/add-post/add-post.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    PostContentComponentModule,
    FeedRoutingModule,
    AddPostComponentModule
  ]
})

export class FeedComponentModule { }
