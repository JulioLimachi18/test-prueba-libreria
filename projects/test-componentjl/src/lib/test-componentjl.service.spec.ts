import { TestBed } from '@angular/core/testing';

import { TestComponentjlService } from './test-componentjl.service';

describe('TestComponentjlService', () => {
  let service: TestComponentjlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestComponentjlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
