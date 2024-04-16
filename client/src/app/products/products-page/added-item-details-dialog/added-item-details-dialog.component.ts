import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/domains/Product';

@Component({
  selector: 'app-added-item-details-dialog',
  templateUrl: './added-item-details-dialog.component.html',
  styleUrls: ['./added-item-details-dialog.component.css']
})
export class AddedItemDetailsDialogComponent implements OnInit {

  product: Product;
  constructor(public dialogRef: MatDialogRef<AddedItemDetailsDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.product = data.product;
      console.log("AddedItemDetailsDialogComponent",this.product.name);
    }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
