import { Component, OnInit } from '@angular/core';
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

  public constructor(
    private restService: RestService
  ) { }

  public ngOnInit(): void {
    this.plantListings$ = this.restService.getPlantListings();
  }
}
