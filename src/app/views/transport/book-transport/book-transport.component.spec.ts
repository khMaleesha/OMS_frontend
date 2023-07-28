import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTransportComponent } from './book-transport.component';

describe('BookTransportComponent', () => {
  let component: BookTransportComponent;
  let fixture: ComponentFixture<BookTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
