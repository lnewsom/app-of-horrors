import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlantListing } from '../models/plant-listing';
import { PLANT_LISTINGS } from '../../../assets/db/plant-listings';
import { Customer } from '../models/customer';
import { CUSTOMERS } from '../../../assets/db/customers';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }

  public getPlantListings(): Observable<PlantListing[]> {
    return of(PLANT_LISTINGS);
  }

  public getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS)
  };
}
