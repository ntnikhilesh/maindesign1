import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WegDetailComponent } from './weg-detail.component';

describe('WegDetailComponent', () => {
  let component: WegDetailComponent;
  let fixture: ComponentFixture<WegDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WegDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
