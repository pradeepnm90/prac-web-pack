import { TestBed } from '@angular/core/testing';

import { GlobalBtnService } from './global-btn.service';

describe('GlobalBtnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalBtnService = TestBed.get(GlobalBtnService);
    expect(service).toBeTruthy();
  });
});
