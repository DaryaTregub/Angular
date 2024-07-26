import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { postsListResolver } from './posts-list.resolver';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts-list',
    pathMatch: 'full',
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'posts-list',
    component: PostsListComponent,
    resolve: [postsListResolver],
    children: [
      {
        path: ':id',
        component: PostComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
