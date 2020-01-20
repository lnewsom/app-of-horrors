import { Component, OnInit } from '@angular/core';
import { PlantListing } from 'src/app/core/models/plant-listing';

@Component({
  selector: 'app-plant-catalog',
  templateUrl: './plant-catalog.component.html',
  styleUrls: ['./plant-catalog.component.scss']
})
export class PlantCatalogComponent implements OnInit {
  public selectedPlant: PlantListing;

  constructor() { }

  ngOnInit() {
  }

  public setSelectedPlant(plantListing: PlantListing): void {
    this.selectedPlant = plantListing;
  }
}
