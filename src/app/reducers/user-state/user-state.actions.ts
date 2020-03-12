import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user';

export const setUser = createAction(
  '[UserState] Set User Data', props<{ user: User}>()
);
