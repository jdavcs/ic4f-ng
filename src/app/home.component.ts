import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageTitleService } from './shared/page-title.service';
import { environment } from '../environments/environment';

/*
 *NOTE: This is a temporary static implementation of a blog post.
 TODO: Implement blog feature module when there's another post. 
 */
@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
  }
}
