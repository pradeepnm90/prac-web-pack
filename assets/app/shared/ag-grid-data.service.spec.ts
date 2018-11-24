import { TestBed } from '@angular/core/testing';

import { AgGridDataService } from './ag-grid-data.service';

describe('AgGridDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgGridDataService = TestBed.get(AgGridDataService);
    expect(service).toBeTruthy();
  });
});
