import { TestBed } from '@angular/core/testing';

import { FfValidationService } from './ff-validation.service';

describe('FfValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FfValidationService = TestBed.get(FfValidationService);
    expect(service).toBeTruthy();
  });
});
