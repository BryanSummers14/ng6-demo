import { TestBed, inject } from '@angular/core/testing';

import { DemoLibService } from './demo-lib.service';

describe('DemoLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoLibService]
    });
  });

  it('should be created', inject([DemoLibService], (service: DemoLibService) => {
    expect(service).toBeTruthy();
  }));
});
