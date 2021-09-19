import { TestBed } from '@angular/core/testing';

import { OrderBotsService } from './order-bots.service';

describe('OrderBotsService', () => {
  let service: OrderBotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderBotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
