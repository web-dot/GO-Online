import { Component, OnInit } from '@angular/core';
import { Product } from '../domains/Product';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.displayProductsOnLoad();
  }

  displayProductsOnLoad(){
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data as Product[];
      console.log(this.products);
    })
  }

}
