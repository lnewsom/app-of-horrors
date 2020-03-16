import { SelectedPlantComponent } from './selected-plant.component';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { generateRandomPlantListing } from 'src/test-utils/model-generators';
import { MockStore, MockState } from '@ngrx/store/testing';
import { ActionsSubject } from '@ngrx/store';
import { selectSelectedPlant } from 'src/app/reducers';

describe('SelectedPlantComponent', () => {
    let underTest: SelectedPlantComponent;
    let mockStore: MockStore<any>;
    let expectedSelectedPlantListing: PlantListing;

    beforeEach(() => {
        expectedSelectedPlantListing = generateRandomPlantListing();

        mockStore = new MockStore(new MockState, new ActionsSubject, null, null);
        mockStore.overrideSelector(selectSelectedPlant, expectedSelectedPlantListing);

        underTest = new SelectedPlantComponent(mockStore);
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            underTest.ngOnInit();
        });

        test('selectedPlantListing is set to expectedSelectedPlantListing', () => {
            underTest.selectedPlant$.subscribe((actualPlantListing) => {
                expect(actualPlantListing).toEqual(expectedSelectedPlantListing);
            });
        });
    });

});
