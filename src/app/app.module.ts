import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule }      from './pages/pages.module';
import { ProjectsModule }   from './projects/projects.module';

import { AppComponent }          from './app.component';
import { HomeComponent }         from './home.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { ProjectDataService } from './projects/project-data.service';
import { ProjectService }     from './projects/project.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ProjectsModule, //must come before pages
    PagesModule,
    AppRoutingModule //must come last
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    ProjectDataService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
