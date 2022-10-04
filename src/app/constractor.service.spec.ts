import { TestBed } from '@angular/core/testing';

import { ConstractorService } from './constractor.service';

describe('ConstractorService', () => {
  let service: ConstractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
