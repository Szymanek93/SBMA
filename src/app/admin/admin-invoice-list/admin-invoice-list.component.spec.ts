import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvoiceListComponent } from './admin-invoice-list.component';

describe('AdminInvoiceListComponent', () => {
  let component: AdminInvoiceListComponent;
  let fixture: ComponentFixture<AdminInvoiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInvoiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
