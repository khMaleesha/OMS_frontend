import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAppointmentComponent } from './visitor-appointment.component';

describe('VisitorAppointmentComponent', () => {
  let component: VisitorAppointmentComponent;
  let fixture: ComponentFixture<VisitorAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
