/* forked and adapted from https://github.com/bbottema/ng2-simple-page-scroll */
import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

export declare type TargetElement = HTMLElement | string;

@Injectable()
export class PageScrollService {
  static SCROLL_OFFSET: number = 0;

  private document: Document;
  private body: HTMLBodyElement;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.document = document;
    this.body = <HTMLBodyElement>document.body;
  }

  scrollToElement(targetElementOrId: TargetElement, pageScrollOffset?: number): void {

    if (pageScrollOffset === undefined) {  
      pageScrollOffset = PageScrollService.SCROLL_OFFSET;
    }

    let anchorTarget = this.determineElement(targetElementOrId);
    if (anchorTarget !== null) {
      setScrollTop(this.body);
      setScrollTop(this.document.documentElement);
      setScrollTop(this.document.body.parentNode);
    }

    function setScrollTop(container: any) {
      if (container && typeof container.scrollTop !== 'undefined') {
        container.scrollTop =
          anchorTarget.offsetTop -
          anchorTarget.scrollTop +
          anchorTarget.clientTop +
          pageScrollOffset; 
      }
    }
  }

  private determineElement(targetElementOrId: TargetElement): HTMLElement {
    if (typeof targetElementOrId === 'string') {
      return this.document.getElementById((<string>targetElementOrId).substr(1));
    } else {
      return <HTMLElement>targetElementOrId;
    }
  }
}
