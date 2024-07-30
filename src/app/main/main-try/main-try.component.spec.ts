/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainTryComponent } from './main-try.component';

describe('MainTryComponent', () => {
  let component: MainTryComponent;
  let fixture: ComponentFixture<MainTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
