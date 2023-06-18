import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorelandingpageRoutingModule } from './storelandingpage-routing.module';
import { StoreLandingPageComponent } from './store-landing-page/store-landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewProductDialogComponent } from './new-product-dialog/new-product-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    StorelandingpageRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class StorelandingpageModule { }
