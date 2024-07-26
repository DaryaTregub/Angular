import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './error/error.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AccessRoleGuard } from './access-role.guard';
import { DataService } from './data.service';
import { EditComponent } from './post/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PostsListComponent,
    PostComponent,
    CapitalizePipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    AccessRoleGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
