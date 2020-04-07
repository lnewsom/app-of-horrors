import { ReplaySubject, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { AppEffects } from './app.effects';
import { PlantListing } from '../../core/models/plant-listing';
import { generateRandomPlantListing, chance, generateRandomUser } from 'src/test-utils/model-generators';
import { RestService } from '../../core/services/rest.service';
import { PlantQuantityService } from '../../core/services/plant-quantity.service';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/core/models/user';
import { getUser, setUser } from '../reducers/user-state';
import { getPlantListings, setPlantListings } from '../reducers/plant-state';

jest.mock('../../core/services/rest.service');
jest.mock('../../core/services/plant-quantity.service');

describe('AppEffects', () => {
    const actions$: ReplaySubject<any> = new ReplaySubject<any>(1);
    let mockRestService: RestService;
    let mockPlantQuantityService: PlantQuantityService;
    let mockAuthenticationService: AuthenticationService;
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

            mockAuthenticationService = new AuthenticationService();

            underTest = new AppEffects(actions$, mockRestService, mockPlantQuantityService, mockAuthenticationService);

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

    describe('getUser$', () => {
        const inputAction: Action = getUser();
        let expectedUser: User;

        beforeEach(() => {
            expectedUser = generateRandomUser();

            mockRestService = new RestService();
            mockPlantQuantityService = new PlantQuantityService();

            mockAuthenticationService = new AuthenticationService();
            mockAuthenticationService.getUser = jest.fn(() => of(expectedUser));

            underTest = new AppEffects(actions$, mockRestService, mockPlantQuantityService, mockAuthenticationService);

            actions$.next(inputAction);
        });

        test('calls authenticationService.getUser', (done) => {
            underTest.getUser$.subscribe(() => {
                expect(mockAuthenticationService.getUser).toHaveBeenCalledTimes(1);
                done();
            });
        });

        test('dispatches expectedAction', (done) => {
            const expectedAction: Action = setUser({ user: expectedUser });
            
            underTest.getUser$.subscribe((actualAction) => {
                expect(actualAction).toEqual(expectedAction);
                done();
            });
        })
    });
});
