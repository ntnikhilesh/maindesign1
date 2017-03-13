import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemDemoComponent } from './add-item-demo.component';

describe('AddItemDemoComponent', () => {
  let component: AddItemDemoComponent;
  let fixture: ComponentFixture<AddItemDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
