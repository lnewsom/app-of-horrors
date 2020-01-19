import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantCatalogComponent } from './plant-catalog/plant-catalog.component';

const routes: Routes = [
    { path: '**', component: PlantCatalogComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlantCatalogRoutingModule { }
