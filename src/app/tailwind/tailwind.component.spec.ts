/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TailwindComponent } from './tailwind.component';

describe('TailwindComponent', () => {
  let component: TailwindComponent;
  let fixture: ComponentFixture<TailwindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailwindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
