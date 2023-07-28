import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleMeatingComponent } from './shedule-meating.component';

describe('SheduleMeatingComponent', () => {
  let component: SheduleMeatingComponent;
  let fixture: ComponentFixture<SheduleMeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduleMeatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleMeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
