import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlantQuantityService {

  constructor(private restService: RestService) { }

  public getQuantityById(plantId: number): number {
    let listingQuantity: number = 0;
    this.restService.getPlantQuantities().pipe(
      map((quantities: {plantId: number, quantity: number}[]) => {
        const listing = quantities.find((listing) => listing.plantId === plantId)
        return listing.quantity
      })
    ).subscribe((quantity) => listingQuantity = quantity);

    return listingQuantity;
  }
}
