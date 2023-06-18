import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products-page/products.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreFormComponent } from './products/new-store-dialog/store-form/store-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreLandingPageComponent } from './storelandingpage/store-landing-page/store-landing-page.component';
import { ExistingStoreDialogComponent } from './products/existing-store-dialog/existing-store-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { NewProductDialogComponent } from './storelandingpage/new-product-dialog/new-product-dialog.component';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { DeleteProductDialogComponent } from './storelandingpage/delete-product-dialog/delete-product-dialog.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StoreFormComponent,
    StoreLandingPageComponent,
    ExistingStoreDialogComponent,
    NewProductDialogComponent,
    DeleteProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
