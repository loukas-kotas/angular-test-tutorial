import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {


  page1 = {
    title: 'Page 1'
  };

  modal = {
    title: 'Modal Heading',
    body: 'Modal body..',
    isVisible: false,
    showButton: {
      title: 'Open modal'
    },
    hideButton: {
      title: 'Close'
    },
  };

  constructor() { }

  ngOnInit() {
  }

  showModal() {
    this.modal.isVisible = true;
  }

  hideModal() {
    this.modal.isVisible = false;
  }

}
