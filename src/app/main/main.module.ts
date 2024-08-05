import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MainComponent } from './main.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainBestRecipeComponent } from './main-best-recipe/main-best-recipe.component';
import { MainTryComponent } from './main-try/main-try.component';
import { MainWeComponent } from './main-we/main-we.component';
import { MainSubscribeComponent } from './main-subscribe/main-subscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [
    
    MainComponent,
    MainSliderComponent,
    MainBestRecipeComponent,
    MainTryComponent,
    MainWeComponent,
    MainSubscribeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
