import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailTableComponent } from './report-detail-table.component';

describe('ReportDetailTableComponent', () => {
  let component: ReportDetailTableComponent;
  let fixture: ComponentFixture<ReportDetailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDetailTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
