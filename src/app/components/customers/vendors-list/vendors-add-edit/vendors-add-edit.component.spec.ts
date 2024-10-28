import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsAddEditComponent } from './vendors-add-edit.component';

describe('VendorsAddEditComponent', () => {
  let component: VendorsAddEditComponent;
  let fixture: ComponentFixture<VendorsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorsAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
