
import { PlantListingTableComponent } from './plant-listing-table.component';
import { RestService } from 'src/app/core/services/rest.service';
import { PlantQuantityService } from 'src/app/core/services/plant-quantity.service';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';
import { of } from 'rxjs';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { chance, generateRandomPlantListing, generateRandomUser } from 'src/test-utils/model-generators';
import { MockStore, MockState } from '@ngrx/store/testing';
import { ActionsSubject } from '@ngrx/store';
import { selectPlantTableData } from 'src/app/reducers';
import { User } from 'src/app/core/models/user';

describe('PlantListingTableComponent', () => {
    const expectedPlantType: string = chance.string();
    const expectedUser: User = generateRandomUser();
    let mockRestService: RestService;
    let mockPlantQuantityService: PlantQuantityService;
    let mockSelectedPlantService: SelectedPlantService;
    let mockStore: MockStore<any>;
    let underTest: PlantListingTableComponent;

    beforeEach(() => {
        mockRestService = new RestService();
        mockPlantQuantityService = new PlantQuantityService();
        mockSelectedPlantService = new SelectedPlantService();
        mockStore = new MockStore(new MockState, new ActionsSubject, null, null);
    });
    
    describe('ngOnInit', () => {
        describe('component data subscribe', () => {
            beforeEach(() => {
                underTest = new PlantListingTableComponent(mockRestService, mockPlantQuantityService, mockSelectedPlantService, mockStore);
                
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

        describe('plantListings$', () => {
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
                underTest = new PlantListingTableComponent(mockRestService, mockPlantQuantityService, mockSelectedPlantService, mockStore);
            });

            test('plantListings$ returns expectedPlantListings', (done) => {
                underTest.ngOnInit();

                underTest.plantListings$.subscribe((plantListings) => {
                    expect(plantListings).toEqual(expectedPlantListings);
                    done();
                });

            });
        });
    });

    describe('selectPlant', () => {
        let expectedPlantListing: PlantListing;

        beforeEach(() => {
            expectedPlantListing = generateRandomPlantListing();

            mockSelectedPlantService.selectPlant = jest.fn();

            underTest = new PlantListingTableComponent(mockRestService, mockPlantQuantityService, mockSelectedPlantService, mockStore);
        });

        test('selectedPlantService selectPlant is called with expected plant listing', () => {
            underTest.selectPlant(expectedPlantListing);

            expect(mockSelectedPlantService.selectPlant).toHaveBeenCalledWith(expectedPlantListing);
        });

    });


});
