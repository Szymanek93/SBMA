import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportEditComponent } from './admin-report-edit.component';

describe('AdminReportEditComponent', () => {
  let component: AdminReportEditComponent;
  let fixture: ComponentFixture<AdminReportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
