import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromUser from './user-state/index';

export interface State {
  router: fromRouter.RouterReducerState<any>,
  userState: fromUser.State
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  userState: fromUser.reducer
};

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>('router');
 
const {
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const selectPlantType = createSelector(selectRouteParam('plantType'), (plantType) => plantType);

const selectUserState = createFeatureSelector(fromUser.userStateFeatureKey);

export const selectUser = createSelector(selectUserState, (state: fromUser.State) => state.user);

export const selectPlantTableData = createSelector(
  selectPlantType, 
  selectUser, 
  (plantType, user) => ({ plantType, user })
);