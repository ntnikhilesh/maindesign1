import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiseCategoryComponent } from './organise-category.component';

describe('OrganiseCategoryComponent', () => {
  let component: OrganiseCategoryComponent;
  let fixture: ComponentFixture<OrganiseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
