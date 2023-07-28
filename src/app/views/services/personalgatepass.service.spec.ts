import { TestBed } from '@angular/core/testing';

import { PersonalgatepassService } from './personalgatepass.service';

describe('PersonalgatepassService', () => {
  let service: PersonalgatepassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalgatepassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
