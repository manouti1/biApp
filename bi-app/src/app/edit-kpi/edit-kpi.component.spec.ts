import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKpiComponent } from './edit-kpi.component';

describe('EditKpiComponent', () => {
  let component: EditKpiComponent;
  let fixture: ComponentFixture<EditKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
