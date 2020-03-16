import { createAction, props } from '@ngrx/store';
import { PlantListing } from 'src/app/core/models/plant-listing';

export const setPlantListings = createAction(
  '[PlantState] Setting Plant Listings', props<{ plantListings: PlantListing[]}>()
); 

export const setSelectedPlant = createAction(
  '[PlantState] Setting Selected Plant', props<{ selectedPlant: PlantListing}>()
); 

export const clearSelectedPlant = createAction(
  '[PlantState] Clear Selected Plant'
); 
