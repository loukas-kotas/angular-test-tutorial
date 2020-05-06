import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { Page2Service } from './page2.service';
import * as registeredUsers from 'src/shared/data/registered-users';

fdescribe('Page2Service', () => {
  let service: Page2Service;

  beforeEach(() => TestBed.configureTestingModule({
  }));

  beforeEach(() => {
    service = new Page2Service();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // INFO: callThrough will delegate spy to the actual implementation. Meaning, it will return the actual result.
  it('should getRegisteredUsersAsync() return list of registered users', fakeAsync(() => {
    const spy = spyOn(service, 'getRegisteredUsers').and.callThrough();

    tick();

    service.getRegisteredUsers().subscribe(data => {
      expect(spy).toHaveBeenCalled();
      expect(data).toEqual(registeredUsers.data);
    });

  }));

});
