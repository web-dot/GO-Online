
declare var google: any;

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domains/Product';
import { ProductsService } from './products.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { StoreFormComponent } from '../new-store-dialog/store-form/store-form.component';
import { Router } from '@angular/router';
import { StoreDetails } from 'src/app/domains/StoreDetails';
import { ExistingStoreDialogComponent } from '../existing-store-dialog/existing-store-dialog.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[];
  link : string;
  storeDetails: StoreDetails;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.displayProductsOnLoad();

    window.onload = () => {
      google.accounts.id.initialize({
        client_id: "113730373728-lu02f6c5mcjr8ae755463ns05a4k9hqi.apps.googleusercontent.com",
        callback: this.handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }

  handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  displayProductsOnLoad(){
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data as Product[];
      console.log(this.products);
    })

  }

  newShopDialog(){
    const dialogRef = this.dialog.open(StoreFormComponent, {
      width: '600px',
      height: '500px',
      disableClose: false,
      autoFocus: true,
      hasBackdrop: true,
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.router.navigate(['/app-store-landing-page'], {
        queryParams:{
          shopName: result.shopName,
          productCategory: result.productCategory,  
          firstName: result.firstName,
          lastName: result.lastName,
          openTime: result.openTime,
          closeTime: result.closeTime
        }
      });
    });
  }

  existingStoreDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '600px';
    dialogConfig.height = '500px';
    dialogConfig.data = {}

    this.dialog.open(ExistingStoreDialogComponent, dialogConfig)
    .afterClosed().subscribe(data => {
      this.router.navigate(['/app-store-landing-page'], {
        queryParams:{
          "firstName":data.data.firstName,
          "lastName": data.data.lastName,
          "shopName": data.data.shopName
        }
      });
    })
  }

 

}


