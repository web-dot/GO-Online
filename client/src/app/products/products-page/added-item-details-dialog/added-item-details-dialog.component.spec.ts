import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedItemDetailsDialogComponent } from './added-item-details-dialog.component';

describe('AddedItemDetailsDialogComponent', () => {
  let component: AddedItemDetailsDialogComponent;
  let fixture: ComponentFixture<AddedItemDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedItemDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedItemDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
