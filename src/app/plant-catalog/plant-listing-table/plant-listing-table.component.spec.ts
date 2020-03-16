
import { PlantListingTableComponent } from './plant-listing-table.component';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { chance, generateRandomPlantListing, generateRandomUser } from 'src/test-utils/model-generators';
import { MockStore, MockState } from '@ngrx/store/testing';
import { ActionsSubject, Action } from '@ngrx/store';
import { selectPlantTableData } from 'src/app/state/reducers';
import { User } from 'src/app/core/models/user';
import { setSelectedPlant } from 'src/app/state/reducers/plant-state';

describe('PlantListingTableComponent', () => {
    const expectedPlantType: string = chance.string();
    const expectedUser: User = generateRandomUser();
    let mockStore: MockStore<any>;
    let underTest: PlantListingTableComponent;

    beforeEach(() => {
        mockStore = new MockStore(new MockState, new ActionsSubject, null, null);
        mockStore.dispatch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    describe('ngOnInit', () => {
        describe('component data subscribe', () => {
            beforeEach(() => {
                underTest = new PlantListingTableComponent(mockStore);
                
                underTest.ngOnInit();
            });
            
            test('componentData is set to expected component data', (done) => {
                const expectedComponentData = { plantType: expectedPlantType, user: expectedUser };
                mockStore.overrideSelector(selectPlantTableData, expectedComponentData);

                underTest.componentData$.subscribe((actualComponentData) => {
                    expect(actualComponentData).toEqual(expectedComponentData);
                    done();
                });
            });
        });
    });

    describe('selectPlant', () => {
        let expectedPlantListing: PlantListing;

        beforeEach(() => {
            expectedPlantListing = generateRandomPlantListing();

            underTest = new PlantListingTableComponent(mockStore);
        });

        test('selectedPlantService selectPlant is called with expected plant listing', () => {
            const expectedAction: Action = setSelectedPlant({ selectedPlant: expectedPlantListing });

            underTest.selectPlant(expectedPlantListing);

            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});
