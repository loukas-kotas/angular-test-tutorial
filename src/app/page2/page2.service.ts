import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as registeredUsers from 'src/shared/data/registered-users';

export interface User {
  id: number;
  name: string;
  surname: string;
}

@Injectable()
export class Page2Service {

  constructor() { }

  getRegisteredUsers(): Observable<User[]> {
    return of(registeredUsers.data);
  }
}
