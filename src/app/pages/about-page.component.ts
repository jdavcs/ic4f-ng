import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../shared/page-title.service';

@Component({
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent implements OnInit {

  constructor(
    private pageTitleService: PageTitleService
  ) {}


  ngOnInit() {
    this.pageTitleService.setTitle('About');
  }
}
