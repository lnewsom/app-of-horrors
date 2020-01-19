import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantCatalogComponent } from './plant-catalog/plant-catalog.component';
import { PlantCatalogRoutingModule } from './plant-catalog-routing.module';
import { PlantListingTableComponent } from './plant-listing-table/plant-listing-table.component';
import { SelectedPlantComponent } from './selected-plant/selected-plant.component';



@NgModule({
  declarations: [PlantCatalogComponent, PlantListingTableComponent, SelectedPlantComponent],
  imports: [
    CommonModule,
    PlantCatalogRoutingModule
  ]
})
export class PlantCatalogModule { }
