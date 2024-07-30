/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainWeComponent } from './main-we.component';

describe('MainWeComponent', () => {
  let component: MainWeComponent;
  let fixture: ComponentFixture<MainWeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
