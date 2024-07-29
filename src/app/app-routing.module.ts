import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizationComponent } from './autorization/autorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { compose } from '@ngxs/store/operators';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { ErrorPageComponent } from './error/error.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/registration',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: RegistrationComponent,  
  },
  {
    path: 'autorization',
    component: AutorizationComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
