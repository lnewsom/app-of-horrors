import { PlantListing } from 'src/app/core/models/plant-listing';
import { Chance } from 'chance';

export const chance: Chance.chance = new Chance();

export const generateRandomPlantListing: Function = (partial?: PlantListing): PlantListing => {
    const plantListing: PlantListing = {
        plantId: chance.integer(),
        quantity: undefined,
        plantName: chance.string(),
        description: chance.string(),
        price: chance.floating(),
        speciesName: chance.string(),
        imageUrl: chance.string(),
        category: chance.string()
    };
    return Object.assign(plantListing, partial);
};
