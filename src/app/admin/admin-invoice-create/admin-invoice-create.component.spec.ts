import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvoiceCreateComponent } from './admin-invoice-create.component';

describe('AdminInvoiceCreateComponent', () => {
  let component: AdminInvoiceCreateComponent;
  let fixture: ComponentFixture<AdminInvoiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInvoiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvoiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
