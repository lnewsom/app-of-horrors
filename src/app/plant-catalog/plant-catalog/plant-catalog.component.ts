import { Component, OnInit } from '@angular/core';
import { PlantListing } from '../../core/models/plant-listing';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from 'src/app/core/models/user';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/reducers/user-state';

@Component({
    selector: 'plant-catalog',
    templateUrl: './plant-catalog.component.html'
})
export class PlantCatalogComponent implements OnInit {
    public selectedPlant: PlantListing;
    public plantType: string;
    public user: User;

    public constructor(
        private authenticationService: AuthenticationService,
        private store: Store<any>
    ) { }

    public ngOnInit(): void {
        this.authenticationService.getUser().subscribe((user) => this.store.dispatch(setUser({ user })));
    }

    public setPlantType(plantType: string): void {
        this.plantType = plantType;
    }
}
