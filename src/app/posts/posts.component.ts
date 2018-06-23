import { Component, OnInit, Output } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'wefox-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  allPosts: Post[] = null;

  @Output() post: Post;

  constructor(private postsrv: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsrv.getAllPosts()
      .subscribe(
        (data: Post[]) => {
          console.log(data);

          this.allPosts = data;
        }
      );
  }


}
