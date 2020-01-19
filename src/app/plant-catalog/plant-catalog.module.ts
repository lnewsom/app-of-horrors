import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantCatalogComponent } from './plant-catalog/plant-catalog.component';
import { PlantCatalogRoutingModule } from './plant-catalog-routing.module';



@NgModule({
  declarations: [PlantCatalogComponent],
  imports: [
    CommonModule,
    PlantCatalogRoutingModule
  ]
})
export class PlantCatalogModule { }
