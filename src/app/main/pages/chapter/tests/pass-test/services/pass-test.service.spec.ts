import { TestBed } from '@angular/core/testing';

import { PassTestService } from './pass-test.service';

describe('PassTestService', () => {
  let service: PassTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
