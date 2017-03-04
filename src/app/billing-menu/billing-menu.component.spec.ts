import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingMenuComponent } from './billing-menu.component';

describe('BillingMenuComponent', () => {
  let component: BillingMenuComponent;
  let fixture: ComponentFixture<BillingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
