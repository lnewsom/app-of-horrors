
import * as fromRouter from '@ngrx/router-store';
import * as fromRoot from './index';
import { chance } from '../../test-utils/model-generators';

describe('root module state', () => {
    describe('router role call', () => {
        test('router reducer', () => {
            expect(fromRoot.reducers.router).toEqual(fromRouter.routerReducer);
        });
    })

    describe('selectors', () => {
        describe('router selectors', () => {
            test('getPlantType', () => {
                const expectedPlantType: string = chance.string();
        
                const actualPlantType: string = fromRoot.selectPlantType.projector(expectedPlantType);
        
                expect(actualPlantType).toEqual(expectedPlantType);
            });
        });
    })
});