import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { postsListResolver } from './posts-list.resolver';
import { PostComponent } from './post/post.component';
import { AccessRoleGuard } from './access-role.guard';
import { postsResolver } from './post.resolver';
import { EditComponent } from './post/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'posts',
    component: PostsListComponent,
    resolve: [postsListResolver],
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: [postsResolver],
    canActivateChild: [AccessRoleGuard],
    children: [
      {
        path: 'edit',
        component: EditComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
