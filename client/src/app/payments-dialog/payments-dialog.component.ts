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
    // Handle payment based on the selected payment method
    if (this.selectedPaymentMethod === 'razorpay') {
      // Initialize Razorpay and trigger payment modal
      // Handle payment response within this block
      // Close the dialog after payment is complete
    }

    // You can handle other payment methods in a similar way

    // Close the dialog after payment
    this.dialogRef.close(/* Payment status or any other data */);
  }
}
