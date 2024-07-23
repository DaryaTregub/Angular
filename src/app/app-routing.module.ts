import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { SecondResolver } from './second.resolver';
import { ResponseComponent } from './response/response.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResponseComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
    resolve: [SecondResolver]
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
