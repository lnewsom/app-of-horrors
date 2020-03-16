import { Action, createReducer, on } from '@ngrx/store';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { setPlantListings, setSelectedPlant, clearSelectedPlant } from './plant-state.actions';

export const plantStateFeatureKey = 'plantState';

export interface State {
  plantListings: PlantListing[];
  selectedPlant: PlantListing;
}

export const initialState: State = {
  plantListings: [],
  selectedPlant: undefined
};

const plantStateReducer = createReducer(
  initialState,
  on(setPlantListings, (state, action) => ({ ...state, plantListings: action.plantListings })),
  on(setSelectedPlant, (state, action) => ({ ...state, selectedPlant: action.selectedPlant })),
  on(clearSelectedPlant, (state) => ({ ...state, selectedPlant: undefined }))
);

export function reducer(state: State | undefined, action: Action) {
  return plantStateReducer(state, action);
}
