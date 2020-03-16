import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { setUser } from './user-state.actions';

export const userStateFeatureKey = 'userState';

export interface State {
  user: User;
}

export const initialState: State = {
  user: undefined
};

const userStateReducer = createReducer(
  initialState,
  on(setUser, (state, action)=> ({ ...state, user: action.user }))
);

export function reducer(state: State | undefined, action: Action) {
  return userStateReducer(state, action);
}
