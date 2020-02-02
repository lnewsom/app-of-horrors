import { Component, OnInit, Input } from '@angular/core';
import { PlantListing } from 'src/app/core/models/plant-listing';

@Component({
  selector: 'app-selected-plant',
  templateUrl: './selected-plant.component.html'
})
export class SelectedPlantComponent {
  @Input() selectedPlant: PlantListing;
}
