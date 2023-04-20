import { TestBed } from '@angular/core/testing';

import { AutocalcApiService } from './autocalc.api.service';

describe('AutocalcApiService', () => {
  let service: AutocalcApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocalcApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
