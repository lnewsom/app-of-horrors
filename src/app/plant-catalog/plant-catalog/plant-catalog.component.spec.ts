import { PlantCatalogComponent } from './plant-catalog.component';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/core/models/user';
import { of } from 'rxjs';
import { chance, generateRandomUser } from '../../../test-utils/model-generators';
import { MockStore, MockState } from '@ngrx/store/testing';
import * as fromUser from '../../reducers/user-state';
import { ActionsSubject, Action } from '@ngrx/store';

jest.mock('src/app/authentication/authentication.service');

describe('PlantCatalogComponent', () => {
    let underTest: PlantCatalogComponent;
    let mockAuthenticationService: AuthenticationService;
    let mockStore: MockStore<any>;
    let expectedUser: User;
    let expectedPlantType: string;

    beforeEach(() => {
        expectedUser = generateRandomUser();

        mockAuthenticationService = new AuthenticationService();
        mockAuthenticationService.getUser = jest.fn(() => of(expectedUser));

        mockStore = new MockStore(new MockState, new ActionsSubject, null, null);
        mockStore.dispatch = jest.fn();

        underTest = new PlantCatalogComponent(mockAuthenticationService, mockStore);
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            underTest.ngOnInit();
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        test('setUser is dispatched', () => {
            const expectedAction: Action = fromUser.setUser({ user: expectedUser });

            expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });

    describe('setPlantType', () => {
        beforeEach(() => {
            expectedPlantType = chance.string();
        });
        test('sets plantTpye to expectedPlantType', () => {
            underTest.setPlantType(expectedPlantType);

            expect(underTest.plantType).toEqual(expectedPlantType);
        });
    });
});
