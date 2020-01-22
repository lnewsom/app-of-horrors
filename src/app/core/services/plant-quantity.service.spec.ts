import { TestBed } from '@angular/core/testing';

import { PlantQuantityService } from './plant-quantity.service';

describe('PlantQuantityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantQuantityService = TestBed.get(PlantQuantityService);
    expect(service).toBeTruthy();
  });
});
