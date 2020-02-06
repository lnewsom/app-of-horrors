import { Chance } from 'chance';

import { PlantListingTableComponent } from './plant-listing-table.component';
import { RestService } from 'src/app/core/services/rest.service';
import { PlantQuantityService } from 'src/app/core/services/plant-quantity.service';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const chance: Chance.Chance = new Chance();

describe('PlantListingTableComponent', () => {
    const expectedPlantType: string = chance.string();
    let mockActivatedRoute: ActivatedRoute;
    let mockRestService: RestService;
    let mockPlantQuantityService: PlantQuantityService;
    let mockSelectedPlantService: SelectedPlantService;
    let underTest: PlantListingTableComponent;

    beforeEach(() => {
        mockActivatedRoute = new ActivatedRoute();
        mockActivatedRoute.params = of({ plantType: expectedPlantType });
        mockRestService = new RestService();
        mockPlantQuantityService = new PlantQuantityService();
        mockSelectedPlantService = new SelectedPlantService();

        underTest = new PlantListingTableComponent(mockActivatedRoute, mockRestService, mockPlantQuantityService, mockSelectedPlantService)
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            underTest.ngOnInit();
        });

        test('plantType is set to expected plantType', () => {
            expect(underTest.plantType).toEqual(expectedPlantType);
        });
    });
});
