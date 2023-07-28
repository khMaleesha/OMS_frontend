import { TestBed } from '@angular/core/testing';

import { MeatingService } from './meating.service';

describe('MeatingService', () => {
  let service: MeatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
