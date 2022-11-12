import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domains/Product';
import { ProductsService } from './products.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { StoreFormComponent } from '../new-store-dialog/store-form/store-form.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[];
  link : string;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.displayProductsOnLoad();
  }

  displayProductsOnLoad(){
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data as Product[];
      console.log(this.products);
    })

  }

  newShopDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '600px';
    dialogConfig.height = '500px';
    dialogConfig.data = {

    }
    let dialogRef = this.dialog.open(StoreFormComponent, dialogConfig)
    .afterClosed().subscribe(
      data => this.router.navigate(['/app-store-landing-page'], {
        queryParams: {
          
        }
      })
    )
  }

}
