import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvoiceEditComponent } from './admin-invoice-edit.component';

describe('AdminInvoiceEditComponent', () => {
  let component: AdminInvoiceEditComponent;
  let fixture: ComponentFixture<AdminInvoiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInvoiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvoiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
