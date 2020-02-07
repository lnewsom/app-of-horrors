import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RestService } from '../../core/services/rest.service';
import { Observable, zip } from 'rxjs';
import { PlantListing } from '../../core/models/plant-listing';
import { PlantQuantityService } from '../../core/services/plant-quantity.service';
import { map } from 'rxjs/operators';
import { User } from '../../core/models/user';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-plant-listing-table',
    templateUrl: './plant-listing-table.component.html',
    styleUrls: ['./plant-listing-table.component.scss']
})
export class PlantListingTableComponent implements OnInit {
    public plantListings$: Observable<any>;
    public plantType: string; // route param
    @Output() emitPlantType: EventEmitter<string> = new EventEmitter<string>();// output to sibling
    @Input() user: User; // from parent

    public constructor(
        private activatedRoute: ActivatedRoute,
        private restService: RestService,
        private plantQuantityService: PlantQuantityService,
        private selectedPlantService: SelectedPlantService
    ) { }

    public ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            this.plantType = params.plantType;
            this.emitPlantType.emit(params.plantType.toLowerCase());
        });

        this.plantListings$ = zip(this.restService.getPlantListings(), this.restService.getPlantQuantities()) // http calls
            .pipe(
                map((response) => {
                    const listings: PlantListing[] = response[0];
                    const quantities: { plantId: number, quantity: number }[] = response[1];

                    return this.plantQuantityService.mapQuantities(listings, quantities);
                })
            );
    }

    public selectPlant(selectedPlant: PlantListing): void {
        this.selectedPlantService.selectPlant(selectedPlant);// rxjs service
    }
}
