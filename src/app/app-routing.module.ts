import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { SecondResolver } from './second.resolver';

const routes: Routes = [
  {
    path: 'second',
    component: SecondComponent,
    resolve: [SecondResolver]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
}
