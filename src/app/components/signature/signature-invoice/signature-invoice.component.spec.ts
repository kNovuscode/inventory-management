import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureInvoiceComponent } from './signature-invoice.component';

describe('SignatureInvoiceComponent', () => {
  let component: SignatureInvoiceComponent;
  let fixture: ComponentFixture<SignatureInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
