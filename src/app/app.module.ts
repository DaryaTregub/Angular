import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './error/error.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { MainSliderComponent } from './main/main-slider/main-slider.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { AdministrationPanelModule } from './administration-panel/administration-panel.module';
import { MainBestRecipeComponent } from './main/main-best-recipe/main-best-recipe.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    AutorizationComponent,
    RegistrationComponent,
    NavbarComponent,
    MainComponent,
    MainSliderComponent,
    RecipeComponent,
    CreateRecipeComponent,
    MainBestRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AuthState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule,
    AdministrationPanelModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
