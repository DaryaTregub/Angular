import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizationComponent } from './autorization/autorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { compose } from '@ngxs/store/operators';
import { RecipesComponent } from './recipes/recipes.component';
import { ErrorPageComponent } from './error/error.component';
import { main } from '@popperjs/core';
import { MainComponent } from './main/main.component';
import { MainResolver } from './main.resolver';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeResolver } from './recipe.resolver';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: [MainResolver]
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
    component: RecipesComponent,
    children: [
      {
        path: ':id',
        component: RecipeComponent,
        resolve: [RecipeResolver]
      }
    ]
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
