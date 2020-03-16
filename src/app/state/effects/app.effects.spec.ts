import { ReplaySubject, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { AppEffects } from './app.effects';
import { getPlantListings, setPlantListings } from '../reducers/plant-state';
import { PlantListing } from '../../core/models/plant-listing';
import { generateRandomPlantListing, chance } from 'src/test-utils/model-generators';
import { RestService } from '../../core/services/rest.service';
import { PlantQuantityService } from '../../core/services/plant-quantity.service';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

jest.mock('../../core/services/rest.service');
jest.mock('../../core/services/plant-quantity.service');

describe('AppEffects', () => {
    const actions$: ReplaySubject<any> = new ReplaySubject<any>(1);
    let mockRestService: RestService;
    let mockPlantQuantityService: PlantQuantityService;
    let underTest: AppEffects;

    describe('getPlantListings$', () => {
        const inputAction: Action = getPlantListings();
        let expectedPlantListings: PlantListing[];
        let incomingPlantListings: PlantListing[];
        let incomingQuantities: any[];

        beforeEach(() => {
            incomingPlantListings = [
                generateRandomPlantListing(),
                generateRandomPlantListing()
            ];

            incomingQuantities = [
                {
                    plantId: chance.integer(),
                    quantity: chance.integer()
                },
                {
                    plantId: chance.integer(),
                    quantity: chance.integer()
                }
            ];
            expectedPlantListings = [
                generateRandomPlantListing({ quantity: chance.integer() }),
                generateRandomPlantListing({ quantity: chance.integer() })
            ];

            mockRestService = new RestService();
            mockRestService.getPlantListings = jest.fn(() => of(incomingPlantListings));
            mockRestService.getPlantQuantities = jest.fn(() => of(incomingQuantities));

            mockPlantQuantityService = new PlantQuantityService();
            mockPlantQuantityService.mapQuantities = jest.fn(() => expectedPlantListings);

            underTest = new AppEffects(actions$, mockRestService, mockPlantQuantityService);

            actions$.next(inputAction);
        });

        test('calls mockRestService with getPlantListings', (done) => {
            underTest.getPlantListings$.subscribe(() => {
                expect(mockRestService.getPlantListings).toHaveBeenCalledTimes(1);
                done();
            });
        });

        test('calls mockRestService with getPlantQuantities', (done) => {
            underTest.getPlantListings$.subscribe(() => {
                expect(mockRestService.getPlantQuantities).toHaveBeenCalledTimes(1);
                done();
            });
        });

        test('calls mockPlantQuantityService with mapQuantities', (done) => {
            underTest.getPlantListings$.subscribe(() => {
                expect(mockPlantQuantityService.mapQuantities)
                    .toHaveBeenCalledWith(incomingPlantListings, incomingQuantities);
                done();
            });
        });

        test('dispatches expectedAction', (done) => {
            const expectedAction: Action = setPlantListings({ plantListings: expectedPlantListings });
            
            underTest.getPlantListings$.subscribe((actualAction) => {
                expect(actualAction).toEqual(expectedAction);
                done();
            });
        })
    });
});