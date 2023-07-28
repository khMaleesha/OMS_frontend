import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMealComponent } from './request-meal.component';

describe('RequestMealComponent', () => {
  let component: RequestMealComponent;
  let fixture: ComponentFixture<RequestMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
