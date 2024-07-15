import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { title } from 'process';
import { app } from '../../server';
import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';
import { OpenGrafComponent } from './open-graf/open-graf.component';

const routes: Routes = [
  {
    path: '',
    component: OpenGrafComponent,
  },
  {
    path: 'inline',
    title: 'Open Graph Page',
    component: InlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
