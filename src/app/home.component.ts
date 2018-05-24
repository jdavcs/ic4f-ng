import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from './pages/page';
import { PageService } from './pages/page.service';
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
  page: Page;

  constructor(
    private pageService: PageService,
    private router: Router,
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.pageService.getPage('home')
      .subscribe( 
        data => { 
          this.page = data; 
          this.pageTitleService.setTitle(this.page.title);
        },
        error => { this.router.navigate(['/404']); } //TODO can't be right
      );
  }
}
