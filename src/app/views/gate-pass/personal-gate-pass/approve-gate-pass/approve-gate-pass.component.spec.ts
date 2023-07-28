import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveGatePassComponent } from './approve-gate-pass.component';

describe('ApproveGatePassComponent', () => {
  let component: ApproveGatePassComponent;
  let fixture: ComponentFixture<ApproveGatePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveGatePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveGatePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
