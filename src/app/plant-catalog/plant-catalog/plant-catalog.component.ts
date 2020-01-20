import { Component, OnInit } from '@angular/core';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-catalog',
  templateUrl: './plant-catalog.component.html',
  styleUrls: ['./plant-catalog.component.scss']
})
export class PlantCatalogComponent implements OnInit {
  public selectedPlant: PlantListing;
  public plantType: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.plantType = params.plantType;
    });
  }

  public setSelectedPlant(plantListing: PlantListing): void {
    this.selectedPlant = plantListing;
  }
}
