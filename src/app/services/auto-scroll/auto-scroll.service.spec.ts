import { TestBed } from '@angular/core/testing';

import { AutoScrollService } from './auto-scroll.service';

describe('AutoScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoScrollService = TestBed.get(AutoScrollService);
    expect(service).toBeTruthy();
  });
});
