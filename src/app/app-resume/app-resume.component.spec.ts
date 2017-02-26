/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppResumeComponent } from './app-resume.component';

describe('AppResumeComponent', () => {
  let component: AppResumeComponent;
  let fixture: ComponentFixture<AppResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
