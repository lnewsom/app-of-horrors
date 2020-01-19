import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core/core.component';

const routes: Routes = [
  {
    path: 'shop', component: CoreComponent,
    children: [
      {
        path: 'plants', 
        loadChildren: () => import('./plant-catalog/plant-catalog.module')
        .then((module) => module.PlantCatalogModule)
      }
    ]
  },
 // {    path: '**', component: CoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }