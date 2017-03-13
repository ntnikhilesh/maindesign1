import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObillingComponentComponent } from './obilling-component.component';

describe('ObillingComponentComponent', () => {
  let component: ObillingComponentComponent;
  let fixture: ComponentFixture<ObillingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObillingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObillingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
