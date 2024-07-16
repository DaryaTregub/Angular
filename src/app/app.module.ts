import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TailwindComponent } from './tailwind/tailwind.component';
import { MaterialComponent } from './material/material.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule} from '@angular/material/expansion'

@NgModule({
  declarations: [		
    AppComponent,
      TailwindComponent,
      MaterialComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    MatExpansionModule,
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
