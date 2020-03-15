import * as userState from './index';
import { User } from 'src/app/core/models/user';
import { generateRandomUser, chance } from 'src/test-utils/model-generators';
import { Action } from '@ngrx/store';

describe('UserStateReducer', () => {
    let initialUserState: userState.State;
    let expectedUserState: userState.State;
    let expectedUser: User;

    beforeEach(() => {
        initialUserState = userState.initialState;
        expectedUser = generateRandomUser();
        expectedUserState = {
            ...initialUserState,
            user: expectedUser
        };
    });

    describe('reducer', () => {
        describe('Initial State is Set', () => {
            test('returns initialized user state', () => {
                const actualUserState: any = userState.reducer(
                    undefined, { type: 'UNDEFINED_TYPE', payload: chance.string() } as Action);

                return expect(actualUserState).toEqual(initialUserState);
            });
        });

        describe('setUser', () => {
            test('returns expected user state', () => {
                const actualUserState: any = userState.reducer(
                    initialUserState, userState.setUser({ user: expectedUser })
                );

                return expect(actualUserState).toEqual(expectedUserState);
            });
        });
    });
});
