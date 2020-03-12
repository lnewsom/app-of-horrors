import { Action, createReducer, on } from '@ngrx/store';


export const userStateFeatureKey = 'userState';

export interface State {

}

export const initialState: State = {

};

const userStateReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return userStateReducer(state, action);
}
