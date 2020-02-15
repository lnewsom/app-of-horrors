import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../core/models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public getUser(): Observable<User> {
        return of(new User('skrelbourn', 'Seymour', 'Krelbourn', 2));
    }
}
