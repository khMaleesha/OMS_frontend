import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOverDeviceComponent } from './hand-over-device.component';

describe('HandOverDeviceComponent', () => {
  let component: HandOverDeviceComponent;
  let fixture: ComponentFixture<HandOverDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandOverDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandOverDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
