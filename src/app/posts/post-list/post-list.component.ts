import { Component, OnInit, Output } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostsService } from '../../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wefox-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  allPosts: Post[] = null;

  @Output() post: Post;

  constructor(private postsrv: PostsService,
              private router: Router,
              private route: ActivatedRoute) { }

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

  onCreatePost() {
    this.router.navigate(['/new']); //absolute path
    //this.router.navigate(['new'], {relativeTo: this.route}); //relative route
  }

}
