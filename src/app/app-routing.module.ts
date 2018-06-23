import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './create/create.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';




const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, children: [
    { path: ':id', component: PostDetailComponent },
  ] },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
