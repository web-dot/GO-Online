import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  description: string = "Fill the details to start your 'Store'"
  
  regForm = new FormGroup({
    shopName: new FormControl(''),
    productCategory: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    openTime: new FormControl(''),
    closeTime: new FormControl(''),
  })

  constructor(
    private dialogRef: MatDialogRef<StoreFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }



  submit(){
    const storeDetails = this.regForm.value;
    this.dialogRef.close(storeDetails);
  }

  close() {
    this.dialogRef.close();
}


}
