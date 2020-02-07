import { RestService } from './rest.service';
import { PlantListing } from '../models/plant-listing';
import { PLANT_LISTINGS } from 'src/assets/db/plant-listings';
import { PLANT_QUANTITIES } from 'src/assets/db/plant-quantities';

describe('RestService', () => {
    let underTest: RestService;
    const expectedPlantListings: PlantListing[] = PLANT_LISTINGS;
    const expectedPlantQuantities: { plantId: number, quantity: number }[] = PLANT_QUANTITIES;

    beforeEach(() => {
        underTest = new RestService();
    });

    describe('getPlantListings', () => {
        test('returns expected plant listings', (done) => {
            underTest.getPlantListings().subscribe((plantListings) => {
                expect(plantListings).toEqual(expectedPlantListings);
                done();
            });
        });
    });

    describe('getPlantQuantities', () => {
        test('returns expected plant quantities', (done) => {
            underTest.getPlantQuantities().subscribe((plantQuantities) => {
                expect(plantQuantities).toEqual(expectedPlantQuantities);
                done();
            });
        });
    });
});
