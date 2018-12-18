import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class AutoScrollService {

  constructor(private _scrollToService: ScrollToService) { }

  public triggerScrollTo(target: string) {

    const config: ScrollToConfigOptions = {
      target: target
    };

    this._scrollToService.scrollTo(config);
  }
}
