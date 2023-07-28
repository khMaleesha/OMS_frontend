import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGatePassComponent } from './security-gate-pass.component';

describe('SecurityGatePassComponent', () => {
  let component: SecurityGatePassComponent;
  let fixture: ComponentFixture<SecurityGatePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityGatePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityGatePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
