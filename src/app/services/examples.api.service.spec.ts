import { TestBed } from '@angular/core/testing';

import { ExamplesApiService } from './examples.api.service';

describe('ExamplesApiService', () => {
  let service: ExamplesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
