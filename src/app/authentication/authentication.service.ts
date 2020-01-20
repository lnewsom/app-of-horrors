import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public getUser(): Observable<any> {
    return of({ username: 'skrelbourn', firstName: 'Seymour', lastName: 'Krelbourn' });
  }
}
