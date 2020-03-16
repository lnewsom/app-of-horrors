import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../../core/services/rest.service';
import { Observable, zip, Subscription } from 'rxjs';
import { PlantListing } from '../../core/models/plant-listing';
import { PlantQuantityService } from '../../core/services/plant-quantity.service';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import { setPlantListings, setSelectedPlant } from 'src/app/reducers/plant-state';

@Component({
    selector: 'plant-listing-table',
    templateUrl: './plant-listing-table.component.html',
    styleUrls: ['./plant-listing-table.component.scss']
})
export class PlantListingTableComponent implements OnInit, OnDestroy {
    public plantListingSubscription: Subscription;
    public componentData$: Observable<any>;

    public constructor(
        private restService: RestService,
        private plantQuantityService: PlantQuantityService,
        private store: Store<fromRoot.State>
    ) { }

    public ngOnInit(): void {
        this.componentData$ = this.store.pipe(
            select(fromRoot.selectPlantTableData)
        );

        this.plantListingSubscription = zip(
            this.restService.getPlantListings(), 
            this.restService.getPlantQuantities()
        )
        .pipe(
            map((response) => {
                const listings: PlantListing[] = response[0];
                const quantities: { plantId: number, quantity: number }[] = response[1];

                return this.plantQuantityService.mapQuantities(listings, quantities);
            })
        ).subscribe((plantListings) => this.store.dispatch(setPlantListings({ plantListings })));
    }

    public ngOnDestroy(): void {
        this.plantListingSubscription.unsubscribe();
    };

    public selectPlant(selectedPlant: PlantListing): void {
        this.store.dispatch(setSelectedPlant({ selectedPlant }));
    }
}
