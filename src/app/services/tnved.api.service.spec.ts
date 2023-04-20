import { TestBed } from '@angular/core/testing';

import { TnvedApiService } from './tnved.api.service';

describe('TnvedApiService', () => {
  let service: TnvedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TnvedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
