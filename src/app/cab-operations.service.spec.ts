import { TestBed } from '@angular/core/testing';

import { CabOperationsService } from './cab-operations.service';

describe('CabOperationsService', () => {
  let service: CabOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
