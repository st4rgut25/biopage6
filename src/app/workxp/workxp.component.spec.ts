/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkxpComponent } from './workxp.component';

describe('WorkxpComponent', () => {
  let component: WorkxpComponent;
  let fixture: ComponentFixture<WorkxpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkxpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkxpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
