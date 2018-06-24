import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../model/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'wefox-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private postsrv: PostsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let newPost = {
      post: form.value
    };
    console.log(newPost);

    this.postsrv.createPost(newPost)
      .subscribe(
        (data) => {
          console.log(data);
        }
      );


  }

}
