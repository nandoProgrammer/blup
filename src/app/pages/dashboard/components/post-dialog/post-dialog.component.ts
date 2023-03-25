import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FeedService } from '../../../../core/services/feed.service';
import { FormBuilder, FormGroup }  from  '@angular/forms';
import { LocalStorage } from 'src/app/core/classes/LocalStorage';

@Component({
  selector: 'post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})

export class PostDialogComponent implements OnInit {
  idUser: string = LocalStorage.getItem('idUser');
  formPost: FormGroup;
  @Input() idPost: string;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PostDialogComponent>,
    private apiFeedService: FeedService
  ) { }

  ngOnInit(): void {
    this.createForm();
    if(this.idPost) this.getPost();
  }

  createForm() {
    this.formPost = this.formBuilder.group({
      content: ['']
    })
  }

  getPost(){
    this.apiFeedService.getPostForId(this.idPost)
    .subscribe({
      next:(res) => {
        this.formPost.patchValue(res)
      },
      error: (error) => {
        throw Error(error.message);
      }
    })
  }

  createPost() {
    this.apiFeedService.createPost(this.idUser, this.formPost.value)
    .subscribe({
      next: () => {}, 
      error: (error) => {
        throw Error(error.message);
      }
    })
  }
  
  updatePost() {
    this.apiFeedService.updatePost(this.idPost, this.formPost.value)
    .subscribe({
      next: res => {
        console.log(res)
      }
    })
  }

  send(){
    if(this.idPost) return this.updatePost();
    return this.createPost();
  }

}
