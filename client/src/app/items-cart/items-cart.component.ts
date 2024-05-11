import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorelandingpageService } from '../storelandingpage/storelandingpage.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from '../products/products-page/products.service';
import { Product } from '../domains/Product';

@Component({
  selector: 'app-items-cart',
  templateUrl: './items-cart.component.html',
  styleUrls: ['./items-cart.component.css']
})
export class ItemsCartComponent implements OnInit {



  cartList: Product[] = [];
  product: Product;



  constructor(
    private route: ActivatedRoute,
    private storeService: StorelandingpageService,
    private dialog: MatDialog,
    private router: Router,
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const cartItems = params.get("cartItems");
      if(cartItems){
        this.cartList = JSON.parse(cartItems);
      }
    })
    console.log(this.cartList);
  }

}
