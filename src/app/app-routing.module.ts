import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizationComponent } from './autorization/autorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { compose } from '@ngxs/store/operators';
import { RecipesComponent } from './recipes/recipes.component';
import { ErrorPageComponent } from './error/error.component';
import { main } from '@popperjs/core';
import { MainComponent } from './main/main.component';
import { MainResolver } from './resolvers/main.resolver';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { UsersComponent } from './administration-panel/panel/admin-users/users.component';
import { UsersResolver } from './resolvers/users.resolver';
import { UserComponent } from './administration-panel/panel/admin-user/user.component';
import { UserResolver } from './resolvers/user.resolver';
import { AdminRecipesComponent } from './administration-panel/panel/admin-recipes/admin-recipes.component';
import { PanelComponent } from './administration-panel/panel/panel.component';
import { AdminRecipesResolver } from './resolvers/admin-recipes.resolver';
import { AdminRecipeResolver } from './resolvers/admin-recipe.resolver';
import { AdminRecipeComponent } from './administration-panel/panel/admin-recipe/admin-recipe.component';
import { ErrorAccessComponent } from './error-access/error-access.component';
import { CreateRecipeGuard } from './create-recipe.guard';



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
    resolve: [MainResolver],
  },

  {
    path: 'recipes/:id',
    component: RecipeComponent,
    resolve: [RecipeResolver]

  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent,
    canActivate:[CreateRecipeGuard]
  },

  {
    path: 'admin',
    component: PanelComponent,

    children: [
      {
        path: 'users',
        component: UsersComponent,
        resolve: [UsersResolver],
      },
      {
        path: 'recipes',
        component: AdminRecipesComponent,
        resolve: [AdminRecipesResolver]
      }
    ]
  },
  {
    path: 'admin/recipes/:id',
    component: AdminRecipeComponent,
    resolve: [AdminRecipeResolver]
  },
  {
    path: 'admin/users/:id',
    component: UserComponent,
    resolve: [UserResolver]
  },
  {
    path: 'error-access',
    component: ErrorAccessComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
