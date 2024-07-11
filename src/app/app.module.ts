import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/Cars.component';
import { DatePipeComponent } from './date/date-pipe.component';
import { CounterComponent } from './counter/counter.component';
import { CounterPipe } from './counter.pipe';


@NgModule({
  declarations: [				
    AppComponent,
      CarsComponent,
      DatePipeComponent,
      CounterComponent,
      CounterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
