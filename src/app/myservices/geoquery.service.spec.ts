import { TestBed } from '@angular/core/testing';

import { GeoqueryService } from './geoquery.service';

describe('GeoqueryService', () => {
  let service: GeoqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
