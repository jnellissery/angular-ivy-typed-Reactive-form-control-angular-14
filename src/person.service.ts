import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonService {
  constructor() {}
  gettitles(): Observable<any> {
    return of([
      { name: 'Mr', default: false },
      { name: 'Dr', default: false },
      { name: 'Miss', default: true },
      { name: 'Mrs', default: false },
    ]);
  }
}
