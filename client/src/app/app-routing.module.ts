import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products-page/products.component';
import { StoreLandingPageComponent } from './storelandingpage/store-landing-page/store-landing-page.component';
import { ItemsCartComponent } from './items-cart/items-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'app-store-landing-page',
    component: StoreLandingPageComponent
  },
  {
    path: 'app-items-cart',
    component: ItemsCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
