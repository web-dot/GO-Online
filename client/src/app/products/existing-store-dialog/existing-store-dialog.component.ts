import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; 

@Component({
  selector: 'app-existing-store-dialog',
  templateUrl: './existing-store-dialog.component.html',
  styleUrls: ['./existing-store-dialog.component.css']
})
export class ExistingStoreDialogComponent implements OnInit {

  enterDetails = "Enter Shop Details"

  detailsForm = new FormGroup({
    "firstName" : new FormControl(''),
    "lastName" : new FormControl(''),
    "shopName" : new FormControl('')
  });

  constructor(private dialogRef: MatDialogRef<ExistingStoreDialogComponent>) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.detailsForm.value);
    this.dialogRef.close({flag: true, data:this.detailsForm.value});
  }

}
