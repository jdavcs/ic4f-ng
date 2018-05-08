import { Component, OnInit } from '@angular/core';
import { PageTitleService } from './page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title: string = '';

  constructor(
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.pageTitleService.titleChanged$.subscribe(title => {
      this.title = title;
    });
  }
}
