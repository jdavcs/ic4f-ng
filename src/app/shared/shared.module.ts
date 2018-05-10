import { Title }    from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YearSpanPipe } from './year-span.pipe';

import { PageScrollService } from './page-scroll.service';
import { PageTitleService }    from './page-title.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ 
    YearSpanPipe
  ],
  exports: [ 
    YearSpanPipe
  ],
  providers: [
    Title,
    PageTitleService,
    PageScrollService
  ]
})
export class SharedModule { }

