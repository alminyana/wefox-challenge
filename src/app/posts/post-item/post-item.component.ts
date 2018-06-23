import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'wefox-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
