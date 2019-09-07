import { TestBed } from '@angular/core/testing';

import { FormGuardService } from './form-guard.service';

describe('FormGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormGuardService = TestBed.get(FormGuardService);
    expect(service).toBeTruthy();
  });
});
