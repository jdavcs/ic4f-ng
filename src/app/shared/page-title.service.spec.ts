import { TestBed } from '@angular/core/testing';

import { PageTitleService } from './page-title.service';


describe('PageTitleService', () => {
  let pageTitleService: PageTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PageTitleService ]
    });

    pageTitleService = TestBed.get(PageTitleService);
  });

  it('Should be created', () => {
    expect(pageTitleService).toBeTruthy();
  });

  it('Should emit the set title', () => {
    const expected = 'foo';
    pageTitleService.titleChanged$.subscribe(
      data => expect(data).toEqual(expected), 
      fail
    );
    pageTitleService.setTitle(expected);
  });
});
