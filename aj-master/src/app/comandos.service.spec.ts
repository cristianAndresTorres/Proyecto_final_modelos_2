import { TestBed } from '@angular/core/testing';

import { ComandosService } from './comandos.service';

describe('ComandosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComandosService = TestBed.get(ComandosService);
    expect(service).toBeTruthy();
  });
});
