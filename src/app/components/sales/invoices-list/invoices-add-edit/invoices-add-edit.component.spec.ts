import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesAddEditComponent } from './invoices-add-edit.component';

describe('InvoicesAddEditComponent', () => {
  let component: InvoicesAddEditComponent;
  let fixture: ComponentFixture<InvoicesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
