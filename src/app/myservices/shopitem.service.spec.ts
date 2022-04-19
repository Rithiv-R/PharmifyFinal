import { TestBed } from '@angular/core/testing';

import { ShopitemService } from './shopitem.service';

describe('ShopitemService', () => {
  let service: ShopitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
