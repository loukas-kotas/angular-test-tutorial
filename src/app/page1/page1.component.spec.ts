import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page1.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const h1 = debugElement.query(By.css('#title'));
    expect(h1.nativeElement.textContent).toEqual(component.page1.title);
  });

  it('should display modal on modal set visible true from component', () => {
    component.modal.isVisible = true;
    expect(component.modal.isVisible).toEqual(true);
  });

  it('should hide modal on modal set visible false from component', () => {
    component.modal.isVisible = true;
    component.modal.isVisible = false;
    expect(component.modal.isVisible).toEqual(false);
  });

  it(`should display modal on Show Modal Button`, () => {
    const tbt = debugElement.query(By.css('#button-show-modal'));
    tbt.triggerEventHandler('click', undefined);
    expect(component.modal.isVisible).toEqual(true);
  });

  it('should call showModal() on button-show-modal click', () => {
    const spy = spyOn(component, 'showModal');

    const tbt = debugElement.query(By.css('#button-show-modal'));
    tbt.triggerEventHandler('click', undefined);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`should hide modal on button-hide-modal click`, () => {
    component.modal.isVisible = true; // modal should be already visible

    fixture.detectChanges(); // inform component's state to update

    const tbt = debugElement.query(By.css('#button-hide-modal'));
    tbt.triggerEventHandler('click', undefined);
    expect(component.modal.isVisible).toEqual(false);
  });

  // TODO: complete test
  it(`should hide modal on button-x-hide-modal click`, () => {
    component.modal.isVisible = true;

    fixture.detectChanges();

    const tbt = debugElement.query(By.css('#button-x-hide-modal'));
    tbt.triggerEventHandler('click', undefined);

    expect(component.modal.isVisible).toEqual(false);
  });

  // TODO: complete test
  it(`should display modal title when modal visible`, () => {
    component.modal.isVisible = true;

    fixture.detectChanges();

    const tbt = debugElement.query(By.css('#modal-title'));

    expect(tbt.nativeElement.textContent).toEqual(component.modal.title);
  });

  // TODO: complete test
  it(`should display modal body when modal visible`, () => {
    component.modal.isVisible = true;

    fixture.detectChanges();

    const tbt = debugElement.query(By.css('#modal-body'));

    expect(tbt.nativeElement.textContent.trim()).toEqual(component.modal.body);
  });


});
