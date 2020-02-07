import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlantListing } from '../models/plant-listing';

@Injectable({
    providedIn: 'root'
})
export class SelectedPlantService {
    private selectedPlant: Subject<PlantListing> = new Subject<PlantListing>();

    public selectPlant(plantListing: PlantListing) {
        this.selectedPlant.next(plantListing);
    }

    public clearSelectedPlant() {
        this.selectedPlant.next();
    }

    public getSelectedPlant(): Observable<PlantListing> {
        return this.selectedPlant.asObservable();
    }
}
