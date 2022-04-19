import { TestBed } from '@angular/core/testing';

import { ShopserveService } from './shopserve.service';

describe('ShopserveService', () => {
  let service: ShopserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
