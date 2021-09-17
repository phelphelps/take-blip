import { TestBed } from '@angular/core/testing';

import { BotLoaderService } from './bot-loader.service';

describe('BotLoaderService', () => {
  let service: BotLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
