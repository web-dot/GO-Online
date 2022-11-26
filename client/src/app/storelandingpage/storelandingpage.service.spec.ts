import { TestBed } from '@angular/core/testing';

import { StorelandingpageService } from './storelandingpage.service';

describe('StorelandingpageService', () => {
  let service: StorelandingpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorelandingpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
