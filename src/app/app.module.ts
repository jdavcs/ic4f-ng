import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule }  from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
