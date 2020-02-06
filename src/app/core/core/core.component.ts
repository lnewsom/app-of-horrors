import { Component } from '@angular/core';
import { SelectedPlantService } from '../services/selected-plant.service';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html'
})
export class CoreComponent {
    public constructor(
        private selectedPlantService: SelectedPlantService
    ) {
    }

    public clearSelectedPlant(): void {
        this.selectedPlantService.clearSelectedPlant();
    }
}
