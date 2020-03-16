import * as plantState from './index';
import { chance, generateRandomPlantListing } from 'src/test-utils/model-generators';
import { Action } from '@ngrx/store';
import { PlantListing } from 'src/app/core/models/plant-listing';

describe('PlantStateReducer', () => {
    let initialPlantState: plantState.State;
    let expectedPlantState: plantState.State;
    let expectedPlantListings: PlantListing[];
    let expectedSelectedPlant: PlantListing;

    beforeEach(() => {
        initialPlantState = plantState.initialState;
        expectedPlantListings = [generateRandomPlantListing(), generateRandomPlantListing(), generateRandomPlantListing()];
        expectedSelectedPlant = generateRandomPlantListing();
        expectedPlantState = {
            ...initialPlantState,
            plantListings: expectedPlantListings,
            selectedPlant: expectedSelectedPlant
        };
    });

    describe('reducer', () => {
        describe('Initial State is Set', () => {
            test('returns initialized plant state', () => {
                const actualPlantState: any = plantState.reducer(
                    undefined, { type: 'UNDEFINED_TYPE', payload: chance.string() } as Action);

                return expect(actualPlantState).toEqual(initialPlantState);
            });
        });

        describe('setPlantListings', () => {
            test('returns expected plant state', () => {
                expectedPlantState = {
                    ...initialPlantState,
                    plantListings: expectedPlantListings
                };

                const actualPlantState: any = plantState.reducer(
                    initialPlantState, plantState.setPlantListings({ plantListings: expectedPlantListings })
                );

                return expect(actualPlantState).toEqual(expectedPlantState);
            });
        });

        describe('setSelectedPlant', () => {
            test('returns expected plant state', () => {
                expectedPlantState = {
                    ...initialPlantState,
                    selectedPlant: expectedSelectedPlant
                };

                const actualPlantState: any = plantState.reducer(
                    initialPlantState, plantState.setSelectedPlant({ selectedPlant: expectedSelectedPlant })
                );

                return expect(actualPlantState).toEqual(expectedPlantState);
            });
        });

        describe('clearSelectedPlant', () => {
            test('returns expected plant state', () => {
                expectedPlantState = {
                    ...initialPlantState,
                    selectedPlant: undefined
                };

                const incomingPlantState = {
                    ...initialPlantState,
                    selectedPlant: expectedSelectedPlant
                }

                const actualPlantState: any = plantState.reducer(
                    incomingPlantState, plantState.clearSelectedPlant()
                );

                return expect(actualPlantState).toEqual(expectedPlantState);
            });
        });
    });
});
