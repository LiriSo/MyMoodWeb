import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPurchaseDiscountComponent } from './first-purchase-discount.component';

describe('FirstPurchaseDiscountComponent', () => {
  let component: FirstPurchaseDiscountComponent;
  let fixture: ComponentFixture<FirstPurchaseDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPurchaseDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPurchaseDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
