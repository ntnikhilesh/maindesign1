import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabDetailComponent } from './main-tab-detail.component';

describe('MainTabDetailComponent', () => {
  let component: MainTabDetailComponent;
  let fixture: ComponentFixture<MainTabDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTabDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
