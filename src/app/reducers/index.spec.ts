
import * as fromRouter from '@ngrx/router-store';
import * as fromRoot from './index';
import * as fromUser from './user-state';
import { chance, generateRandomUser } from '../../test-utils/model-generators';
import { User } from '../core/models/user';

describe('root module state', () => {
    describe('router role call', () => {
        test('router reducer', () => {
            expect(fromRoot.reducers.router).toEqual(fromRouter.routerReducer);
        });

        test('user reducer', () => {
            expect(fromRoot.reducers.userState).toEqual(fromUser.reducer);
        });
    })

    describe('selectors', () => {
        describe('router selectors', () => {
            test('selectPlantType', () => {
                const expectedPlantType: string = chance.string();
        
                const actualPlantType: string = fromRoot.selectPlantType.projector(expectedPlantType);
        
                expect(actualPlantType).toEqual(expectedPlantType);
            });
        });

        describe('user selectors', () => {
            test('selectUser', () => {
                const expectedUser: User = generateRandomUser();
                const expectedUserState: fromUser.State = {
                    ...fromUser.initialState,
                    user: expectedUser
                };
        
                const actualUser: User = fromRoot.selectUser.projector(expectedUserState);
        
                expect(actualUser).toEqual(expectedUser);
            });
        });

        describe('composed selectors', () => {
            const expectedPlantType: string = chance.string();
            const expectedUser: User = generateRandomUser();
            const expectedPlantTableData = { 
                plantType: expectedPlantType,
                user: expectedUser
            };

            const actualPlantTableData = fromRoot.selectPlantTableData.projector(expectedPlantType, expectedUser);

            expect(actualPlantTableData).toEqual(expectedPlantTableData);
        });
    })
});