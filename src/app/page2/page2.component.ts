import { Component, OnInit } from '@angular/core';
import { Page2Service } from './page2.service';
import * as registeredUsers from 'src/shared/data/registered-users';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  page2 = {
    title: 'Page 2',
    buttongetRegisteredUsersAsyncAsync: {
      title: 'Get Users Async'
    },
    buttonhideListAsyncAsync: {
      title: 'Hide Users Async'
    },
    buttongetRegisteredUsersSync: {
      title: 'Get Users Sync'
    },
    buttonhideListSync: {
      title: 'Hide Users Sync'
    },
  };

  listingAsync = {
    registeredUsers: [],
    isVisible: false,
  };

  listingSync = {
    registeredUsers: [],
    isVisible: false,
  };

  constructor(
    private page2Service: Page2Service,
  ) { }

  ngOnInit() {
  }

  getRegisteredUsersAsync(): void {

    this.page2Service.getRegisteredUsers()
    .subscribe(
    data => {
      this.listingAsync.registeredUsers = data;
      console.log(this.listingAsync);
      this.listingAsync.isVisible = true;
    },
    error => {
      this.showErrorMessage('Could not get registered users');
    });
  }

  hideListAsync(): void {
    this.listingAsync.isVisible = false;
  }

  getRegisteredUsersSync(): void {
    this.listingSync.registeredUsers = registeredUsers.data;
    this.listingSync.isVisible = true;
  }

  hideListSync(): void {
    this.listingSync.isVisible = false;
  }

  showErrorMessage(msg: string): void {
    console.error(msg);
  }


}
