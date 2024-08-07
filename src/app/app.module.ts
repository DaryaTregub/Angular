import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, isFormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MainModule } from './main/main.module';
import { AdministrationPanelModule } from './administration-panel/administration-panel.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './error/error.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { AuthState } from './store/auth.state';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RandomPipe } from './pipes/random.pipe';
import { LikesState } from './store/likes.state';
import { ErrorAccessComponent } from './error-access/error-access.component';





@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    AutorizationComponent,
    RegistrationComponent,
    NavbarComponent,
    RecipeComponent,
    CreateRecipeComponent,
    RecipesComponent,
    RandomPipe,
    ErrorAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AuthState, LikesState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule,
    AdministrationPanelModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
