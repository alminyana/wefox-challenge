import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../model/post.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'wefox-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  current: Post = null;
  id: number;

  constructor(private postsrv: PostsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  //EventEmitter verson (deprecated)

  //   this.postsrv.postToUpdate
  //     .subscribe(
  //       (data: Post) => {
  //         this.current = data;
  //         console.log('this.current:::', this.current);
  //       }
  //     );
  // }

  this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.postsrv.getPostById(this.id)
        .subscribe(
          (data: Post) => {
            this.current = data;
          }
        );
    }
  );
}

onGoToPosts() {
  this.router.navigate(['/posts']);
}



}
