import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutPageComponent }      from './about-page.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [ 
    AboutPageComponent
  ]
})
export class PagesModule {} 
