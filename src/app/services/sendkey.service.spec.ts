import { TestBed } from '@angular/core/testing';

import { SendkeyService } from './sendkey.service';

describe('SendkeyService', () => {
  let service: SendkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
