import { Component, OnInit } from '@angular/core';
import { PlantListing } from '../../core/models/plant-listing';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';

@Component({
    selector: 'selected-plant',
    templateUrl: './selected-plant.component.html',
    styleUrls: ['./selected-plant.component.scss']
})
export class SelectedPlantComponent implements OnInit {
    public selectedPlant$: Observable<PlantListing>;

    public constructor(
        private store: Store<any>
    ) {
    }

    public ngOnInit(): void {
        this.selectedPlant$ = this.store.pipe(
            select(fromRoot.selectSelectedPlant)
        );
    }
}
