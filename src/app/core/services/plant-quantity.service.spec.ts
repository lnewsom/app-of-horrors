import { Chance } from 'chance';

import { PlantQuantityService } from './plant-quantity.service';
import { PlantListing } from '../models/plant-listing';

const chance: Chance.chance = new Chance();

describe('PlantQuantityService', () => {
    let underTest: PlantQuantityService;
    let incomingPlantListings: PlantListing[];
    let incomingPlantQuantities: { plantId: number, quantity: number }[];
    let expectedPlantListings: PlantListing[];
    const plantIdOne: number = chance.integer();
    const plantIdTwo: number = chance.integer();
    const plantIdThree: number = chance.integer();
    const plantQuantityOne: number = chance.integer();
    const plantQuantityTwo: number = chance.integer();
    const plantQuantityThree: number = chance.integer();


    beforeEach(() => {
        incomingPlantListings = [
            {
                plantId: plantIdOne,
                quantity: undefined,
                plantName: chance.string(),
                description: chance.string(),
                price: chance.floating(),
                speciesName: chance.string(),
                imageUrl: chance.string(),
                category: chance.string()
            },
            {
                plantId: plantIdTwo,
                quantity: undefined,
                plantName: chance.string(),
                description: chance.string(),
                price: chance.floating(),
                speciesName: chance.string(),
                imageUrl: chance.string(),
                category: chance.string()
            },
            {
                plantId: plantIdThree,
                quantity: undefined,
                plantName: chance.string(),
                description: chance.string(),
                price: chance.floating(),
                speciesName: chance.string(),
                imageUrl: chance.string(),
                category: chance.string()
            }
        ];

        incomingPlantQuantities = [
            {
                plantId: plantIdOne,
                quantity: plantQuantityOne
            },
            {
                plantId: plantIdTwo,
                quantity: plantQuantityTwo
            },
            {
                plantId: plantIdThree,
                quantity: plantQuantityThree
            }
        ];

        expectedPlantListings = [...incomingPlantListings];
        expectedPlantListings[0].quantity = plantQuantityOne;
        expectedPlantListings[1].quantity = plantQuantityTwo;
        expectedPlantListings[2].quantity = plantQuantityThree;

        underTest = new PlantQuantityService();
    });

    test('corrently maps quantities', () => {
        const actualPlantListings: PlantListing[] = underTest.mapQuantities(incomingPlantListings, incomingPlantQuantities);

        expect(actualPlantListings).toEqual(expectedPlantListings);
    })
});
