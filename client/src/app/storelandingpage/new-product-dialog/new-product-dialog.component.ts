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
  productDetails: Product = new Product();
  selectedFile: File;
  maxFileSize = 5000000;



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
    if(typeof this.selectedFile !== 'undefined'){
      this.selectedFile = event.target.files[0];
      let fileSize = this.selectedFile.size;
      let fileName = this.selectedFile.name;
      let fileType = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
  
      if((fileType === 'png' || fileType === 'jpg' || fileType === 'jpg') && (fileSize <= this.maxFileSize) 
        ){
          this.productDetails.image = this.selectedFile;
        }
    }
  }

  submit(){
    this.dialogRef.close({product: this.productDetails});
  }



}
