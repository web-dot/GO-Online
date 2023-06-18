import { Component, OnInit } from '@angular/core';
import { StoreDetails } from 'src/app/domains/StoreDetails';
import { ActivatedRoute } from '@angular/router';
import { StorelandingpageService } from '../storelandingpage.service';
import { MatDialog } from '@angular/material/dialog';
import { StoreFormComponent } from 'src/app/products/new-store-dialog/store-form/store-form.component';
import { Router } from '@angular/router';
import { User } from 'src/app/domains/User';
import { NewProductDialogComponent } from '../new-product-dialog/new-product-dialog.component';
import { ProductsService } from 'src/app/products/products-page/products.service';
import { Product } from 'src/app/domains/Product';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-store-landing-page',
  templateUrl: './store-landing-page.component.html',
  styleUrls: ['./store-landing-page.component.css']
})
export class StoreLandingPageComponent implements OnInit {

  user: User;
  storeCreated: boolean = false;
  product: Product;
  products: Product[];
  displayedColumns: string[] = ['name', 'description', 'category', 'price', "edit", "delete"];
  dataSource: Product[];
  tableHeaderName: string = "Dashboard Table";
  

  constructor(
    private route: ActivatedRoute,
    private storeService: StorelandingpageService,
    private dialog: MatDialog,
    private router: Router,
    private productService: ProductsService,
    ) { }

  storeDetails: StoreDetails = new StoreDetails();

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const userJson = params.get("userJson");
      if(userJson){
        this.user = JSON.parse(userJson);
      }
    })
    // const userJson = this.route.snapshot.queryParams["userJson"];
    // this.user = JSON.parse(userJson);
    this.storeCreated = this.user.storeOwner;
    console.log(this.storeCreated);
    //this.saveStoreData();
    this.loadProductsTable();
  }


  saveStoreData(){
    this.storeService.saveStoreData(this.storeDetails).subscribe(data => {
      console.log(data);
    });
  }

  newShopDialog(){
    const dialogRef = this.dialog.open(StoreFormComponent, {
      disableClose: false,
      autoFocus: true,
      hasBackdrop: true,
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result.productCategory !== null || result.shopName !== null){
        this.storeDetails.userId = this.user.userId;
        this.storeDetails.shopName = result.shopName;
        this.storeDetails.summary = result.summary;
        this.storeCreated = true;
      }
      this.storeService.saveStoreData(this.storeDetails).subscribe(response =>{
        console.log(response);
      })
    });
  }


  addNewProduct(){
    const dialogRef = this.dialog.open(NewProductDialogComponent, {
      disableClose: false,
      autoFocus: true,
      hasBackdrop: true,
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.product = result as Product;
      this.product.userId = this.user.userId;
      this.productService.saveProduct(this.product).subscribe(res => {
        console.log("response", res);
        this.loadProductsTable();
      })
    });
  }

  loadProductsTable(){
    this.productService.getAllProducts().subscribe(data => {
      this.products = data as Product[];
      this.dataSource = this.products;
      console.log(this.dataSource);
    });    
  }

  deleteProductById(id: string){
    let dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      disableClose: true,
      autoFocus: true,
      hasBackdrop: true,
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.storeService.deleteProductFromRepoById(id).subscribe(response => {
          console.log(response);
          this.loadProductsTable();
        });
      }
    });
  }
}
