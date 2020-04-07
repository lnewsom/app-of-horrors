import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { getPlantListings, setPlantListings } from '../reducers/plant-state';
import { RestService } from 'src/app/core/services/rest.service';
import { PlantQuantityService } from 'src/app/core/services/plant-quantity.service';
import { mergeMap, map } from 'rxjs/operators';
import { zip } from 'rxjs';
import { PlantListing } from 'src/app/core/models/plant-listing';

@Injectable()
export class AppEffects {
  @Effect()
  public getPlantListings$ = createEffect(() => 
  this.actions$.pipe(
    ofType(getPlantListings),
    mergeMap(() => {
      return zip(
        this.restService.getPlantListings(), 
        this.restService.getPlantQuantities()
      )
      .pipe(
          map((response) => {
              const listings: PlantListing[] = response[0];
              const quantities: { plantId: number, quantity: number }[] = response[1];

              return this.plantQuantityService.mapQuantities(listings, quantities);
          })
      )
    }),
    map((plantListings) => setPlantListings({ plantListings }))
  ));
  
  constructor(
    private actions$: Actions,
    private restService: RestService,
    private plantQuantityService: PlantQuantityService
    ) {}
}
