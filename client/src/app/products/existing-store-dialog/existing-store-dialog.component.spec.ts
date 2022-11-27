import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingStoreDialogComponent } from './existing-store-dialog.component';

describe('ExistingStoreDialogComponent', () => {
  let component: ExistingStoreDialogComponent;
  let fixture: ComponentFixture<ExistingStoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingStoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingStoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
