import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
