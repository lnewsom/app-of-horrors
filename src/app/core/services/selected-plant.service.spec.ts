import { SelectedPlantService } from './selected-plant.service';
import { PlantListing } from '../models/plant-listing';
import { generateRandomPlantListing } from 'src/test-utils/model-generators';

describe('SelectedPlantService', () => {
    let underTest: SelectedPlantService;
    let expectedPlantListing: PlantListing;
    
    beforeEach(() => {
        expectedPlantListing = generateRandomPlantListing();

        underTest = new SelectedPlantService();
    });

    test('selectSelectedPlant is called, getSelectedPlant returns expectedPlantListing', (done) => {
        underTest.getSelectedPlant().subscribe((plantListing) => {
            expect(plantListing).toEqual(expectedPlantListing);
            done();
        });

        underTest.selectPlant(expectedPlantListing);
    });

    test('clearSelectedPlant is called, getSelectedplant returns undefined', (done) => {
        underTest.getSelectedPlant().subscribe((plantListing) => {
            expect(plantListing).toEqual(undefined);
            done();
        });

        underTest.clearSelectedPlant();
    })
});
