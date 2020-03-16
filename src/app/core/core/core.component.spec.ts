import { CoreComponent } from './core.component';
import { MockState, MockStore } from '@ngrx/store/testing';
import { ActionsSubject, Action } from '@ngrx/store';
import { clearSelectedPlant } from 'src/app/state/reducers/plant-state';

describe('CoreComponent', () => {
    let underTest: CoreComponent;
    let mockStore: MockStore<any>;

    beforeEach(() => {
        mockStore = new MockStore(new MockState, new ActionsSubject, null, null);
        mockStore.dispatch = jest.fn();

        underTest = new CoreComponent(mockStore);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('clearSelectedPlant', () => {
        test('calls selectedPlantService.clearSelectedPlant', () => {
            const expectedAction: Action = clearSelectedPlant();
            underTest.clearSelectedPlant();

            expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});
