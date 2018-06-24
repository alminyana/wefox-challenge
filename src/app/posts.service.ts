import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Post } from './model/post.model';
import { AppConfig } from './app-config';

@Injectable()
export class PostsService {

  //postToUpdate: EventEmitter <Post> = new EventEmitter ();

  constructor(private http: HttpClient) { }


  getAllPosts(): Observable<any> {
    const url: string = AppConfig.getPosts;

    return this.http.get(url, {observe: 'body', responseType: 'json'});
  }

  getPostById(id: number): Observable<any> {
    const url: string = AppConfig.getPosts + '/' + id;
    return this.http.get(url, {observe: 'body', responseType: 'json'});
  }

  createPost(post) {
    const url: string =  AppConfig.getPosts;
    return this.http.post(url, post);
  }

  deletePost(id: number) {
    const url: string = AppConfig.getPosts + '/' + id;
    return this.http.delete(url);
  }

}
