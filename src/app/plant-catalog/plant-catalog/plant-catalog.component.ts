import { Component, OnInit } from '@angular/core';
import { PlantListing } from 'src/app/core/models/plant-listing';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-plant-catalog',
  templateUrl: './plant-catalog.component.html',
  styleUrls: ['./plant-catalog.component.scss']
})
export class PlantCatalogComponent implements OnInit {
  public selectedPlant: PlantListing;
  public plantType: string;
  public user: any;

  constructor(private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.plantType = params.plantType;
    });

    this.authenticationService.getUser().subscribe((user) => this.user = user);
  }

  public setSelectedPlant(plantListing: PlantListing): void {
    this.selectedPlant = plantListing;
  }
}
