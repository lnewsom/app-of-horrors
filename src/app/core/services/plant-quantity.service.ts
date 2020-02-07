import { Injectable } from '@angular/core';
import { PlantListing } from '../models/plant-listing';

@Injectable({
    providedIn: 'root'
})
export class PlantQuantityService {
    public mapQuantities(listings: PlantListing[], quantities: { plantId: number, quantity: number }[]): PlantListing[] {
        return listings.map((listing) => {
            const listingQuantity = quantities.find((quantity) => quantity.plantId === listing.plantId);
            return ({
                ...listing,
                quantity: listingQuantity.quantity
            });
        });
    }
}
