import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponseComponent } from './response/response.component';
import { SecondComponent } from './second/second.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [			
    AppComponent,
      ResponseComponent,   
      SecondComponent, ErrorPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
