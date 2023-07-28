import { TestBed } from '@angular/core/testing';

import { MetirialGatePassService } from './metirial-gate-pass.service';

describe('MetirialGatePassService', () => {
  let service: MetirialGatePassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetirialGatePassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
