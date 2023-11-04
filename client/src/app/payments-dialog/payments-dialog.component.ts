import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payments-dialog.component.html',
  styleUrls: ['./payments-dialog.component.css']
})
export class PaymentsDialogComponent {
  selectedPaymentMethod: string;

  constructor(public dialogRef: MatDialogRef<PaymentsDialogComponent>) {}

  selectPaymentMethod() {
    // Close the dialog and pass the selected payment method back to the parent component
    this.dialogRef.close(this.selectedPaymentMethod);
  }

  cancel() {
    // Close the dialog without selecting a payment method
    this.dialogRef.close();
  }
}
