import { TestBed } from '@angular/core/testing';

import { ChangeMainContentService } from './change-main-content.service';

describe('ChangeMainContentService', () => {
  let service: ChangeMainContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeMainContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
