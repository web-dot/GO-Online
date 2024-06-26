
declare var google: any;

import { Component, OnInit, NgZone } from '@angular/core';
import { Product } from 'src/app/domains/Product';
import { ProductsService } from './products.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { StoreFormComponent } from '../new-store-dialog/store-form/store-form.component';
import { Router } from '@angular/router';
import { StoreDetails } from 'src/app/domains/StoreDetails';
import { ExistingStoreDialogComponent } from '../existing-store-dialog/existing-store-dialog.component';
import { User } from 'src/app/domains/User';
import { ActivatedRoute, Params } from '@angular/router';
import { PaymentsDialogComponent } from 'src/app/payments-dialog/payments-dialog.component';
import { AddedItemDetailsDialogComponent } from './added-item-details-dialog/added-item-details-dialog.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[];
  link : string;
  storeDetails: StoreDetails;
  user: User = new User;
  cartList: Product[] = [];
  cartHasItems: boolean = false;

  constructor(
    public productsService: ProductsService,
    private dialog: MatDialog,
    private router: Router,
    private ngZone: NgZone,
    public activatedRoute: ActivatedRoute,

    ) { 
      this.productsService = productsService;
      this.activatedRoute
      .queryParams
      .subscribe((params: Params) => {
        this.user = JSON.parse(params['user']) as User;
        console.log("after routing", this.user.name);
      })
    }

  ngOnInit(): void {
    this.displayProductsOnLoad();

    window.onload = () => {
      google.accounts.id.initialize({
        client_id: "113730373728-lu02f6c5mcjr8ae755463ns05a4k9hqi.apps.googleusercontent.com",
        callback: this.handleCredentialResponse.bind(this)
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
    const idToken = response.credential;
    this.getUserDetailsOnIDToken(idToken);
  }

  getUserDetailsOnIDToken(idtoken: string){
    if(idtoken !== null){
      this.productsService.sendToken(idtoken).subscribe(response => {
        this.user = response as User;
        const userJson = JSON.stringify(this.user);
        this.ngZone.run(() => {
          this.router.navigate(['/app-store-landing-page'], {
            queryParams:{
              userJson: userJson,
            }
          });
        });
      },
      error => {
        console.log(error);
      });
    }
  }

  displayProductsOnLoad(){
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data as Product[];
      console.log(this.products);
    })

  }



  goToCart(){
    this.router.navigate(['/app-items-cart'], {
      queryParams:{
        cartItems: JSON.stringify(this.cartList)
      } 
    });
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

  openPaymentsDialog(product: Product){
    const dialogRef = this.dialog.open(PaymentsDialogComponent, {
      disableClose: false,
      autoFocus: true,
      hasBackdrop: true,
      width: '400px',
      data:{
        user: JSON.stringify(this.user)
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  addItemToCart(product: Product){
    console.log("ProductsComponent",product);
    const dialogRef = this.dialog.open(AddedItemDetailsDialogComponent, {
      disableClose: false,
      autoFocus: true,
      width: '400px',
      height: '500px',
      data:{
        product: product
      }
    })
    this.cartList.push(product);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
    this.cartHasItems = true;
    console.log(this.cartList);
  }

}


