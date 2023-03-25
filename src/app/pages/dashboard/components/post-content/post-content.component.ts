import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { UserService } from 'src/app/core/services/user.service';
import { FeedService } from 'src/app/core/services/feed.service';

@Component({
  selector: 'post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  statusComments: boolean = false;
  user: any;
  comment: string;
  listComments: Array<{content: string}>;
  @Input() data: any;

  constructor(
    private dialog: MatDialog,
    private apiUserService: UserService,
    private apiFeedService: FeedService
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.getUser();
      this.getComments();
    }
  }

  getUser(){
    this.apiUserService.getUser(this.data.user_uuid).subscribe({
      next: res => {
        this.user = res;
      }
    })
  }

  statusComents(): boolean {
    return this.statusComments = !this.statusComments;
  }

  editPost() {
    let modalRef = this.dialog.open(PostDialogComponent, {
      width: '500px',
    });

    modalRef.componentInstance.idPost = this.data.id;
  }

  getComments() {
    this.apiFeedService.getComment(this.data.id).subscribe({
      next: (res) => {
        this.listComments = res;
        console.log(res)
      },
      error: (error) => {
        throw Error(error.message);
      }
    })
  }

  sendComment(comment: string) {
    let data = { "content": comment };

    this.apiFeedService.createComment(this.user.id, this.data.id, data)
    .subscribe({
      next: (res) => {
        console.log(res)
        this.getComments();
      },
      error: (error) => {
        throw Error(error.message)
      }
    })
  }

}
