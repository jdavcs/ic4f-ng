import { Component, OnInit } from '@angular/core';

import { PageTitleService } from './page-title.service';
import { environment } from '../environments/environment';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title: string = '';

  constructor(
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.pageTitleService.setTitle(this.title);
  }
}

