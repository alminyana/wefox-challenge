import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './create/create.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { UpdateComponent } from './update/update.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, children: [
    { path: ':id', component: PostDetailComponent },
  ] },
  { path: 'new', component: CreateComponent },
  { path: 'edit/:id', component: UpdateComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
