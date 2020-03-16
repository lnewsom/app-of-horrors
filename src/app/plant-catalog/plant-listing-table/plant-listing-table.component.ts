import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantListing } from '../../core/models/plant-listing';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../state/reducers/index';
import { setSelectedPlant } from 'src/app/state/reducers/plant-state';

@Component({
    selector: 'plant-listing-table',
    templateUrl: './plant-listing-table.component.html',
    styleUrls: ['./plant-listing-table.component.scss']
})
export class PlantListingTableComponent implements OnInit {
    public componentData$: Observable<any>;

    public constructor(
        private store: Store<fromRoot.State>
    ) { }

    public ngOnInit(): void {
        this.componentData$ = this.store.pipe(
            select(fromRoot.selectPlantTableData)
        );
    }

    public selectPlant(selectedPlant: PlantListing): void {
        this.store.dispatch(setSelectedPlant({ selectedPlant }));
    }
}
