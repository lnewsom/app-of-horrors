
import * as fromRouter from '@ngrx/router-store';
import * as fromRoot from './index';
import * as fromUser from './user-state';
import * as fromPlant from './plant-state';
import { chance, generateRandomUser, generateRandomPlantListing } from '../../../test-utils/model-generators';
import { User } from '../../core/models/user';
import { PlantListing } from '../../core/models/plant-listing';

describe('root module state', () => {
    describe('router role call', () => {
        test('router reducer', () => {
            expect(fromRoot.reducers.router).toEqual(fromRouter.routerReducer);
        });

        test('user reducer', () => {
            expect(fromRoot.reducers.userState).toEqual(fromUser.reducer);
        });

        test('plant reducer', () => {
            expect(fromRoot.reducers.plantState).toEqual(fromPlant.reducer);
        });
    })

    describe('selectors', () => {
        describe('router selectors', () => {
            test('selectPlantType', () => {
                const expectedPlantType: string = chance.string();
        
                const actualPlantType: string = fromRoot.selectPlantType.projector(expectedPlantType);
        
                expect(actualPlantType).toEqual(expectedPlantType);
            });
        });

        describe('user selectors', () => {
            test('selectUser', () => {
                const expectedUser: User = generateRandomUser();
                const expectedUserState: fromUser.State = {
                    ...fromUser.initialState,
                    user: expectedUser
                };
        
                const actualUser: User = fromRoot.selectUser.projector(expectedUserState);
        
                expect(actualUser).toEqual(expectedUser);
            });
        });

        describe('plant selectors', () => {
            test('selectPlantListings', () => {
                const expectedPlantListings: PlantListing[] = [generateRandomPlantListing(), generateRandomPlantListing()];
                const expectedPlantState: fromPlant.State = {
                    ...fromPlant.initialState,
                    plantListings: expectedPlantListings
                };
        
                const actualPlantListings: PlantListing[] = fromRoot.selectPlantListings.projector(expectedPlantState);
        
                expect(actualPlantListings).toEqual(expectedPlantListings);
            });

            test('selectSelectedPlant', () => {
                const expectedPlantListing: PlantListing = generateRandomPlantListing();
                const expectedPlantState: fromPlant.State = {
                    ...fromPlant.initialState,
                    selectedPlant: expectedPlantListing
                };
        
                const actualPlantListing: PlantListing = fromRoot.selectSelectedPlant.projector(expectedPlantState);
        
                expect(actualPlantListing).toEqual(expectedPlantListing);
            });
        });

        describe('composed selectors', () => {   
            describe('selectPlantTableData', () => {
                const expectedPlantType: string = chance.string();
                const expectedUser: User = generateRandomUser();
                const expectedPlantListings: PlantListing[] = [generateRandomPlantListing(), generateRandomPlantListing()];
                let expectedPlantTableData: any;

                test('all values present returns expected', () => {
                    expectedPlantTableData = { 
                        plantType: expectedPlantType,
                        user: expectedUser,
                        plantListings: expectedPlantListings
                    };

                    const actualPlantTableData = fromRoot.selectPlantTableData.projector(expectedPlantType, expectedUser, expectedPlantListings);

                    expect(actualPlantTableData).toEqual(expectedPlantTableData);
                });

                test('missing plantType returns undefined', () => {
                    const actualPlantTableData = fromRoot.selectPlantTableData.projector(undefined, expectedUser, expectedPlantListings);

                    expect(actualPlantTableData).toBeUndefined();
                });

                test('missing user returns undefined', () => {
                    const actualPlantTableData = fromRoot.selectPlantTableData.projector(expectedPlantType, undefined, expectedPlantListings);

                    expect(actualPlantTableData).toBeUndefined();
                });

                test('missing plantListings returns undefined', () => {
                    const actualPlantTableData = fromRoot.selectPlantTableData.projector(expectedPlantType, expectedUser, undefined);

                    expect(actualPlantTableData).toBeUndefined();
                });
            });
        });
    })
});