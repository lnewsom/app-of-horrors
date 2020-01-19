import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListingTableComponent } from './plant-catalog/plant-listing-table/plant-listing-table.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PlantListingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
