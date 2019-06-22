import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiListingComponent } from './kpi-listing.component';

describe('KpiListingComponent', () => {
  let component: KpiListingComponent;
  let fixture: ComponentFixture<KpiListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
