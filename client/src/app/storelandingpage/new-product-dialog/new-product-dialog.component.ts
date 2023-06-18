import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/domains/Product';

@Component({
  selector: 'app-new-product-dialog',
  templateUrl: './new-product-dialog.component.html',
  styleUrls: ['./new-product-dialog.component.css']
})
export class NewProductDialogComponent implements OnInit {

  productDescription: string = "Product Details";
  productDetails: Product;

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl('')
  });

  constructor(
    private dialogRef: MatDialogRef<NewProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { 
    console.log('data in dialog ', data);
    if(data.editProduct != undefined){
      this.productDetails = data.editProduct[0];
      this.productForm.patchValue(this.productDetails);
    }
  }

  ngOnInit(): void {
  }

  submit(){
    this.productDetails = this.productForm.value;
    console.log('after edit ', this.productDetails);
    this.dialogRef.close({product: this.productDetails});
  }

}
