import { TestBed } from '@angular/core/testing';

import { CadastarCriancaService } from './cadastar-crianca/cadastar-crianca.service';

describe('CadastarCriancaService', () => {
  let service: CadastarCriancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastarCriancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
