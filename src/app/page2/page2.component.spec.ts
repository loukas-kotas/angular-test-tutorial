import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { Page2Component } from './page2.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Page2Service, User } from './page2.service';
import { of, throwError, Observable } from 'rxjs';
import * as registeredUsers from 'src/shared/data/registered-users';

const Page2ServiceFake = {
  getRegisteredUsers(): Observable<User[]> {
    return of([{
      id: 0,
      name: 'test',
      surname: 'user'
    }]);
  }
};

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page2Component],
      providers: [
        // {provide: Page2Service, useValue: Page2ServiceFake},
        Page2Service,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const h1 = debugElement.query(By.css('#title'));
    expect(h1.nativeElement.textContent).toEqual(component.page2.title);
  });

  describe('Async Testing', () => {
    // TODO: complete test
    // HINT: check page2.service.spec.ts
    it('should get registered users on button-get-registered-users-async click', fakeAsync(() => {

      const tbt = debugElement.query(By.css('#button-get-registered-users-async'));

      tbt.triggerEventHandler('click', undefined);

      tick();

      expect(component.listingAsync.registeredUsers).toEqual(registeredUsers.data);
    }));

    // TODO: complete test
    // HINT: check page2.service.spec.ts
    it('should set listingAsync.isVisible to true on button-get-registered-users-async click', fakeAsync(() => {

      const tbt = debugElement.query(By.css('#button-get-registered-users-async'));

      tbt.triggerEventHandler('click', undefined);

      tick();

      expect(component.listingAsync.isVisible).toEqual(true);

    }));

    // TODO: complete test
    it('should call getRegisteredUsersAsync() on button-get-registered-users-async click', () => {

      const spy = spyOn(component, 'getRegisteredUsersAsync');

      const tbt = debugElement.query(By.css('#button-get-registered-users-async'));
      tbt.triggerEventHandler('click', undefined);

      expect(spy).toHaveBeenCalled();
    });

    // TODO: complete test
    it('should set listingAsync.isVisible to false on button-get-registered-users-async click', fakeAsync(() => {

      const fakeData = [
        {
          id: 0,
          name: 'Joe',
          surname: 'Black',
        },
      ];

      const service = TestBed.get(Page2Service);

      const spygetRegisteredUsersAsync = spyOn(service, 'getRegisteredUsers');

      spygetRegisteredUsersAsync.and.callFake(() => {
          return of(fakeData);
      });


      // const spyShowErrorMessage = spyOn(component, 'showErrorMessage');


      component.getRegisteredUsersAsync();

      // const tbt = debugElement.query(By.css('#button-get-registered-users-async'));
      // tbt.triggerEventHandler('click', undefined);

      tick();


      expect(component.listingAsync.registeredUsers).toEqual(fakeData);
    }));


    it('should call showErrorMessage() function on getRegisteredUsersAsync() error', fakeAsync(() => {
      const service = TestBed.get(Page2Service);

      const spygetRegisteredUsersAsync = spyOn(service, 'getRegisteredUsers').and.callThrough();

      spygetRegisteredUsersAsync.and.returnValue(throwError({ status: 401 }));


      const spyShowErrorMessage = spyOn(component, 'showErrorMessage').and.callThrough();


      component.getRegisteredUsersAsync();

      // const tbt = debugElement.query(By.css('#button-get-registered-users-async'));
      // tbt.triggerEventHandler('click', undefined);

      tick();

      expect(spygetRegisteredUsersAsync).toHaveBeenCalled();
      expect(spyShowErrorMessage).toHaveBeenCalled();

    }));

    // TODO: complete test
    it('should call hideListAsync() on button-hide-registered-users-async button', () => {

      const spy = spyOn(component, 'hideListAsync').and.callThrough();

      const tbt = debugElement.query(By.css('#button-hide-registered-users-async'));

      tbt.triggerEventHandler('click', undefined);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Sync Testing', () => {

    // TODO: complete test
    it('should get registered users on button-get-registered-users-sync click', () => {

      const tbt = debugElement.query(By.css('#button-get-registered-users-sync'));

      tbt.triggerEventHandler('click', undefined);

      expect(component.listingSync.registeredUsers).toEqual(registeredUsers.data);
    });

    // TODO: complete test
    it('should set listingSync.isVisible to true on button-get-registered-users-sync click', () => {

      const tbt = debugElement.query(By.css('#button-get-registered-users-sync'));

      tbt.triggerEventHandler('click', undefined);

      expect(component.listingSync.isVisible).toEqual(true);
    });

    // TODO: complete test
    it('should call getRegisteredUsersSync() on button-get-registered-users-sync click', () => {

      const spy = spyOn(component, 'getRegisteredUsersSync');

      const tbt = debugElement.query(By.css('#button-get-registered-users-sync'));
      tbt.triggerEventHandler('click', undefined);

      expect(spy).toHaveBeenCalled();
    });

    // TODO: complete test
    it('should set listingSync.isVisible to false on button-hide-registered-users-sync click', () => {

      const tbt = debugElement.query(By.css('#button-hide-registered-users-sync'));

      tbt.triggerEventHandler('click', undefined);

      expect(component.listingSync.isVisible).toEqual(false);
    });

    // TODO: complete test
    it('should call hideListSync() on button-hide-registered-users-sync click', () => {
      const spy = spyOn(component, 'hideListSync');

      const tbt = debugElement.query(By.css('#button-hide-registered-users-sync'));

      tbt.triggerEventHandler('click', undefined);

      expect(spy).toHaveBeenCalled();
    });



  });

});
