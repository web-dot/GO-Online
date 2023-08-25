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
  selectedFile: File;



  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl('')
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

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.productForm.patchValue({
      image: this.selectedFile
    });
  }

  submit(){
    // this.productForm.value.image = this.selectedFile;
    this.productDetails = this.productForm.value;
    console.log('pruductDetails after adding ', this.productDetails);
    this.dialogRef.close({product: this.productDetails});
  }

}
