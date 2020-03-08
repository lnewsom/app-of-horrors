
import { PlantListingTableComponent } from './plant-listing-table.component';
import { RestService } from 'src/app/core/services/rest.service';
import { PlantQuantityService } from 'src/app/core/services/plant-quantity.service';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { chance, generateRandomPlantListing } from 'src/test-utils/model-generators';

describe('PlantListingTableComponent', () => {
    const expectedPlantType: string = chance.string();
    let mockActivatedRoute: ActivatedRoute;
    let mockRestService: RestService;
    let mockPlantQuantityService: PlantQuantityService;
    let mockSelectedPlantService: SelectedPlantService;
    let underTest: PlantListingTableComponent;

    beforeEach(() => {
        mockActivatedRoute = new ActivatedRoute();
        mockActivatedRoute.params = of({ plantType: expectedPlantType });
        mockRestService = new RestService();
        mockPlantQuantityService = new PlantQuantityService();
        mockSelectedPlantService = new SelectedPlantService();
    });

    describe('ngOnInit', () => {
        describe('route params subscribe', () => {
            beforeEach(() => {
                underTest = new PlantListingTableComponent(mockActivatedRoute, mockRestService, mockPlantQuantityService, mockSelectedPlantService);

                underTest.ngOnInit();
            });

            test('plantType is set to expected plantType', () => {
                expect(underTest.plantType).toEqual(expectedPlantType);
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
                underTest = new PlantListingTableComponent(mockActivatedRoute, mockRestService, mockPlantQuantityService, mockSelectedPlantService);
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

            underTest = new PlantListingTableComponent(mockActivatedRoute, mockRestService, mockPlantQuantityService, mockSelectedPlantService);
        });

        test('selectedPlantService selectPlant is called with expected plant listing', () => {
            underTest.selectPlant(expectedPlantListing);

            expect(mockSelectedPlantService.selectPlant).toHaveBeenCalledWith(expectedPlantListing);
        });

    });


});
