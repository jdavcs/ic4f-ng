import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { PageTitleService } from './shared/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title: string = '';

  constructor(
       private pageTitleService: PageTitleService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.pageTitleService.titleChanged$.subscribe(title => {
      this.title = title;

      let docTitle: string = environment.docTitlePrefix + title;
      if (title === '') {
        docTitle = environment.defaultDocTitle;
      }
      this.titleService.setTitle(docTitle);
    });
  }
}
