import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportCreateComponent } from './admin-report-create.component';

describe('AdminReportCreateComponent', () => {
  let component: AdminReportCreateComponent;
  let fixture: ComponentFixture<AdminReportCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
