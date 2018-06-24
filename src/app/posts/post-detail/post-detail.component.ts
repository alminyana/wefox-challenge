import { } from '@types/googlemaps';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('gmap') gmapElement: ElementRef;

  map: google.maps.Map;
  marker: google.maps.Marker;
  currentLat: number;
  currentLong: number;


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

  showMap(current: Post) {
    this.currentLat = +current.lat;
    this.currentLong = +current.long;


    let mapProp = {
    center: new google.maps.LatLng(this.currentLat, this.currentLong ),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    clickableIcons: false
  };



  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  this.marker = new google.maps.Marker({
       position: {lat: this.currentLat, lng: this.currentLong},
       map: this.map,
       animation: google.maps.Animation.DROP
     });
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
