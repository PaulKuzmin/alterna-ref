import { TestBed } from '@angular/core/testing';

import { OisApiService } from './ois.api.service';

describe('OisApiService', () => {
  let service: OisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
