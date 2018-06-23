import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostsService } from '../../posts.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'wefox-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  id: number;
  selectedPost: Post;

  constructor(private postsrv: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.postsrv.getPostById(this.id)
          .subscribe(
            (data: Post) => {
              console.log('detail::', data);
              this.selectedPost = data;
            }
          );
      }
    );

  }

}
