import { SelectedPlantComponent } from './selected-plant.component';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { of } from 'rxjs';
import { generateRandomPlantListing } from 'src/test-utils/model-generators';

describe('SelectedPlantComponent', () => {
    let underTest: SelectedPlantComponent;
    let mockSelectedPlantService: SelectedPlantService;
    let expectedSelectedPlantListing: PlantListing;

    beforeEach(() => {
        expectedSelectedPlantListing = generateRandomPlantListing();

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
    });

});
