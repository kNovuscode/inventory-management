import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitNotesAddEditComponent } from './debit-notes-add-edit.component';

describe('DebitNotesAddEditComponent', () => {
  let component: DebitNotesAddEditComponent;
  let fixture: ComponentFixture<DebitNotesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitNotesAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitNotesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
