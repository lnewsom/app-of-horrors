import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RestService } from '../../core/services/rest.service';
import { Observable, zip } from 'rxjs';
import { PlantListing } from '../../core/models/plant-listing';
import { PlantQuantityService } from '../../core/services/plant-quantity.service';
import { map } from 'rxjs/operators';
import { User } from '../../core/models/user';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';

@Component({
  selector: 'app-plant-listing-table',
  templateUrl: './plant-listing-table.component.html',
  styleUrls: ['./plant-listing-table.component.scss']
})
export class PlantListingTableComponent implements OnInit {
  public plantListings$: Observable<any>;
  @Output() selectedPlant:EventEmitter<PlantListing> = new EventEmitter<PlantListing>(); //to rxjs service
  @Input() plantType: string; // route param
  @Input() user: User; // from parent

  public constructor(
    private restService: RestService,
    private plantQuantityService: PlantQuantityService,
    private selectedPlantService: SelectedPlantService
  ) { }

  public ngOnInit(): void {
    this.plantListings$ = zip(this.restService.getPlantListings(), this.restService.getPlantQuantities()) // http calls
    .pipe(
      map((response) => {
        const listings: PlantListing[] = response[0];
        const quantities: { plantId: number, quantity: number }[] = response[1];

        return this.plantQuantityService.mapQuantities(listings, quantities);
      })
    );
  }

  public selectPlant(selectedPlant: PlantListing) {
    this.selectedPlantService.selectPlant(selectedPlant);
  }
}
