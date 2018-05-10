import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';

import { Page } from './page';
import { PageService } from './page.service';
import { PageTitleService } from '../shared/page-title.service';


@Component({
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  page: Page;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private router: Router,
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap( (params: ParamMap) => {
        return this.pageService.getPage(params.get('id'));
      })
      .subscribe( 
        data => { 
          this.page = data; 
          this.pageTitleService.setTitle(this.page.title);
        },
        error => { this.router.navigate(['/404']); } //TODO can't be right
      );
  }
}
