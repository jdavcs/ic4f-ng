import { TestBed, async }    from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'

import { AppComponent } from './app.component';
import { PageTitleService } from './page-title.service';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule ],
      providers: [ PageTitleService ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
