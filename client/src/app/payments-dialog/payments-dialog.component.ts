// payments-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payments-dialog',
  templateUrl: './payments-dialog.component.html',
  styleUrls: ['./payments-dialog.component.css']
})
export class PaymentsDialogComponent {
  selectedPaymentMethod: string;

  constructor(public dialogRef: MatDialogRef<PaymentsDialogComponent>) {
    this.selectedPaymentMethod = ''; // Default selection
  }

  payNow() {
    // Close the dialog after payment
    this.dialogRef.close(this.selectedPaymentMethod);
  }
}
