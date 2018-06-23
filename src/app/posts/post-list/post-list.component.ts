import { Component, OnInit, Output } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'wefox-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

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
