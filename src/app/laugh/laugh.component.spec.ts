/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaughComponent } from './laugh.component';

describe('LaughComponent', () => {
  let component: LaughComponent;
  let fixture: ComponentFixture<LaughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
