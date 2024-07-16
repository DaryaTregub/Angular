import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TailwindComponent } from './tailwind/tailwind.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [			
    AppComponent,
      TailwindComponent,
      BootstrapComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    AccordionModule.forRoot(),
   
  ],
  exports: [  AccordionModule,],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
