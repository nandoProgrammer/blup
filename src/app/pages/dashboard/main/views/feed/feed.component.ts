import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { FeedService } from 'src/app/core/services/feed.service';
import { PostDialogComponent } from '../../../components/post-dialog/post-dialog.component';

import { LocalStorage } from 'src/app/core/classes/LocalStorage';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  idUser: string = LocalStorage.getItem('idUser');
  listPosts$: Observable<any>;

  constructor(
    private apiServiceFeed: FeedService, 
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }
  
  getPosts(){
    this.listPosts$ = this.apiServiceFeed.getPosts(this.idUser);
  }

  openPostModal() {
    this.dialog.open(PostDialogComponent, {
      width: '500px',
    });
  }
  
}
