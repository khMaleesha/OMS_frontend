import { TestBed } from '@angular/core/testing';

import { BooktransportService } from './booktransport.service';

describe('BooktransportService', () => {
  let service: BooktransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooktransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
