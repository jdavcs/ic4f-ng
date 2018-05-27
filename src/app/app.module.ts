import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';

import { PagesModule }      from './pages/pages.module';
import { SharedModule }     from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }          from './app.component';
import { HomeComponent }         from './home.component';
import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    AppRoutingModule //must come last
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {} 
