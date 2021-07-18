import { TestBed } from '@angular/core/testing';

import { OwapiService } from './owapi.service';

describe('OwapiService', () => {
  let service: OwapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
