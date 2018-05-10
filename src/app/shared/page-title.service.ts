import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageTitleService {

  private titleSource = new Subject<string>();

  titleChanged$ = this.titleSource.asObservable();

  setTitle(title: string) {
    this.titleSource.next(title);
  }
}
