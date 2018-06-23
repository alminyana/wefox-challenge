import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './create/create.component';




const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
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
