import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmainTabDetailComponent } from './omain-tab-detail.component';

describe('OmainTabDetailComponent', () => {
  let component: OmainTabDetailComponent;
  let fixture: ComponentFixture<OmainTabDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmainTabDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmainTabDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
