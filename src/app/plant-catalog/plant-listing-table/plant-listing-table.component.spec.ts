
import { PlantListingTableComponent } from './plant-listing-table.component';
import { RestService } from 'src/app/core/services/rest.service';
import { PlantQuantityService } from 'src/app/core/services/plant-quantity.service';
import { of, Subscription } from 'rxjs';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { chance, generateRandomPlantListing, generateRandomUser } from 'src/test-utils/model-generators';
import { MockStore, MockState } from '@ngrx/store/testing';
import { ActionsSubject, Action } from '@ngrx/store';
import { selectPlantTableData } from 'src/app/reducers';
import { User } from 'src/app/core/models/user';
import { setPlantListings, setSelectedPlant } from 'src/app/reducers/plant-state';

describe('PlantListingTableComponent', () => {
    const expectedPlantType: string = chance.string();
    const expectedUser: User = generateRandomUser();
    let mockRestService: RestService;
    let mockPlantQuantityService: PlantQuantityService;
    let mockStore: MockStore<any>;
    let underTest: PlantListingTableComponent;

    beforeEach(() => {
        mockRestService = new RestService();
        mockPlantQuantityService = new PlantQuantityService();
        mockStore = new MockStore(new MockState, new ActionsSubject, null, null);
        mockStore.dispatch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    describe('ngOnInit', () => {
        describe('component data subscribe', () => {
            beforeEach(() => {
                underTest = new PlantListingTableComponent(mockRestService, mockPlantQuantityService, mockStore);
                
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

        describe('plantListingsSubscription', () => {
            let expectedPlantListings: PlantListing[];

            beforeEach(() => {
                const incomingPlantListings: PlantListing[] = [
                    generateRandomPlantListing(),
                    generateRandomPlantListing()
                ];

                const incomingQuantities: any[] = [
                    {
                        plantId: chance.integer(),
                        quantity: chance.integer()
                    },
                    {
                        plantId: chance.integer(),
                        quantity: chance.integer()
                    }
                ];
                expectedPlantListings = [
                    generateRandomPlantListing({ quantity: chance.integer() }),
                    generateRandomPlantListing({ quantity: chance.integer() })
                ];

                mockRestService.getPlantListings = jest.fn(() => of(incomingPlantListings));
                mockRestService.getPlantQuantities = jest.fn(() => of(incomingQuantities));
                mockPlantQuantityService.mapQuantities = jest.fn(() => expectedPlantListings);
                underTest = new PlantListingTableComponent(mockRestService, mockPlantQuantityService, mockStore);
            });

            test('dispatch to have been called with expectedPlantListings', () => {
                const expectedAction: Action = setPlantListings({ plantListings: expectedPlantListings });

                underTest.ngOnInit();

                expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
                expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
            });
        });
    });

    describe('ngOnDestroy', () => {
        test('subscription is unsubscribed', () => {
            underTest.plantListingSubscription = new Subscription;
            underTest.plantListingSubscription.unsubscribe = jest.fn();

            underTest.ngOnDestroy();

            expect(underTest.plantListingSubscription.unsubscribe).toHaveBeenCalled();
        });

    });

    describe('selectPlant', () => {
        let expectedPlantListing: PlantListing;

        beforeEach(() => {
            expectedPlantListing = generateRandomPlantListing();

            underTest = new PlantListingTableComponent(mockRestService, mockPlantQuantityService, mockStore);
        });

        test('selectedPlantService selectPlant is called with expected plant listing', () => {
            const expectedAction: Action = setSelectedPlant({ selectedPlant: expectedPlantListing });

            underTest.selectPlant(expectedPlantListing);

            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});
