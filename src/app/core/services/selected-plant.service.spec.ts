import { Chance } from 'chance';

import { SelectedPlantService } from './selected-plant.service';
import { PlantListing } from '../models/plant-listing';

const chance: Chance.chance = new Chance();

describe('SelectedPlantService', () => {
    let underTest: SelectedPlantService;
    let expectedPlantListing: PlantListing;
    
    beforeEach(() => {
        expectedPlantListing = {
            plantId: chance.string(),
            plantName: chance.string(),
            speciesName: chance.string(),
            description: chance.string(),
            imageUrl: chance.string(),
            category: chance.string(),
            price: chance.integer(),
            quantity: chance.integer()
        };

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
