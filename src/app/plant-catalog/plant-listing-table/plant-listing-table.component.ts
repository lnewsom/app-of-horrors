import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RestService } from 'src/app/core/services/rest.service';
import { Observable } from 'rxjs';
import { PlantListing } from 'src/app/core/models/plant-listing';

@Component({
  selector: 'app-plant-listing-table',
  templateUrl: './plant-listing-table.component.html',
  styleUrls: ['./plant-listing-table.component.scss']
})
export class PlantListingTableComponent implements OnInit {
  public plantListings$: Observable<PlantListing[]>;
  @Output() selectedPlant:EventEmitter<PlantListing> = new EventEmitter<PlantListing>();
  @Input() plantType: string;
  @Input() user: any;

  public constructor(
    private restService: RestService
  ) { }

  public ngOnInit(): void {
    this.plantListings$ = this.restService.getPlantListings();
  }

  public selectPlant(selectedPlant: PlantListing) {
    this.selectedPlant.emit(selectedPlant);
  }
}
