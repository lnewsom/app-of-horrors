import { Component, OnInit } from '@angular/core';
import { PlantListing } from '../../core/models/plant-listing';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-plant-catalog',
  templateUrl: './plant-catalog.component.html'
})
export class PlantCatalogComponent implements OnInit {
  public selectedPlant: PlantListing;
  public plantType: string;
  public user: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.plantType = params.plantType;
    });

    this.authenticationService.getUser().subscribe((user) => this.user = user);
  }
}
