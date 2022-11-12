import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
    private dialogRef: MatDialogRef<StoreFormComponent>
  ) { }

  ngOnInit(): void {
  }



  submit(){
    let storeDetails = this.regForm.value;
    console.log(storeDetails);
    this.dialogRef.close(storeDetails);
    this.close();
  }

  close() {
    this.dialogRef.close();
}


}
