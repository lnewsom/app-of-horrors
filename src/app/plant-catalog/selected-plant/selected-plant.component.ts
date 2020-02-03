import { Component, OnInit, Input } from '@angular/core';
import { PlantListing } from '../../core/models/plant-listing';
import { SelectedPlantService } from 'src/app/core/services/selected-plant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selected-plant',
  templateUrl: './selected-plant.component.html'
})
export class SelectedPlantComponent implements OnInit {
  public selectedPlant$: Observable<PlantListing>

  public constructor(
    private selectedPlantService: SelectedPlantService
  ){
  }

  public ngOnInit(): void {
    this.selectedPlant$ = this.selectedPlantService.getSelectedPlant();
  }
}
