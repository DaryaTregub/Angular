import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './panel/admin-users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserComponent } from './panel/admin-user/user.component';
import { PanelComponent } from './panel/panel.component';
import { AdminRecipesComponent } from './panel/admin-recipes/admin-recipes.component';
import { AdminRecipeComponent } from './panel/admin-recipe/admin-recipe.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PanelComponent,
    AdminRecipesComponent,
    AdminRecipeComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AdministrationPanelModule { 

}
