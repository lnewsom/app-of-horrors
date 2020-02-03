import { TestBed } from '@angular/core/testing';

import { SelectedPlantService } from './selected-plant.service';

describe('SelectedPlantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedPlantService = TestBed.get(SelectedPlantService);
    expect(service).toBeTruthy();
  });
});
