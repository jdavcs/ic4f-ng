import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule }      from './pages/pages.module';
//import { PostsModule }      from './posts/posts.module';
//import { ProjectsModule }   from './projects/projects.module';

import { AppComponent }          from './app.component';
import { HomeComponent }         from './home.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { PageService }    from './pages/page.service';
import { PageTitleService }    from './page-title.service';
//import { PostService }    from './posts/post.service';
//import { ProjectService } from './projects/project.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    //   PostsModule,
    // ProjectsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    PageService,
    PageTitleService
    //PostService,
    //ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
