import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentheadApprovelComponent } from './departmenthead-approvel.component';

describe('DepartmentheadApprovelComponent', () => {
  let component: DepartmentheadApprovelComponent;
  let fixture: ComponentFixture<DepartmentheadApprovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentheadApprovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentheadApprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
