import { TestBed } from '@angular/core/testing';

import { BandoDAOService } from './bando-dao.service';

describe('BandoDAOService', () => {
  let service: BandoDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandoDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
