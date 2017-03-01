import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDetailComponent } from './side-nav-detail.component';

describe('SideNavDetailComponent', () => {
  let component: SideNavDetailComponent;
  let fixture: ComponentFixture<SideNavDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
