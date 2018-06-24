import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostsService } from '../../posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'wefox-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  id: number;
  selectedPost: Post;

  constructor(private postsrv: PostsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.postsrv.getPostById(this.id)
          .subscribe(
            (data: Post) => {
              this.selectedPost = data;
            }
          );
      }
    );
  }

  onDeletePost(post: Post): void {
    //console.log(post);
    this.postsrv.deletePost(post.id)
      .subscribe(
        (data: null) => {
          this.router.navigate(['/posts']);
        }
      );
  }

  onUpdatePost(post: Post): void {
    //this.postsrv.postToUpdate.emit(post);
    this.router.navigate(['/edit/' + post.id]);
  }




}
