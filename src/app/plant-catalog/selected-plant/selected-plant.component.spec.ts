import { Chance } from 'chance';

import { SelectedPlantComponent } from './selected-plant.component';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { of } from 'rxjs';

const chance: Chance.chance = new Chance();

describe('SelectedPlantComponent', () => {
    let underTest: SelectedPlantComponent;
    let mockSelectedPlantService: SelectedPlantService;
    let expectedSelectedPlantListing: PlantListing;

    beforeEach(() => {
        expectedSelectedPlantListing = {
            plantId: chance.string(),
            plantName: chance.string(),
            speciesName: chance.string(),
            description: chance.string(),
            imageUrl: chance.string(),
            category: chance.string(),
            price: chance.integer(),
            quantity: chance.integer()
        };

        mockSelectedPlantService = new SelectedPlantService();
        mockSelectedPlantService.getSelectedPlant = jest.fn(() => of(expectedSelectedPlantListing));

        underTest = new SelectedPlantComponent(mockSelectedPlantService);
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            underTest.ngOnInit();
        });

        test('selectedPlantListing is set to expectedSelectedPlantListing', () => {
            underTest.selectedPlant$.subscribe((actualPlantListing) => {
                expect(actualPlantListing).toEqual(expectedSelectedPlantListing);
            });
        });
    })

});
