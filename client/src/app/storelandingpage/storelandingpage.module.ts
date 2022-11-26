import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorelandingpageRoutingModule } from './storelandingpage-routing.module';
import { StoreLandingPageComponent } from './store-landing-page/store-landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StorelandingpageRoutingModule,
    MatToolbarModule
  ]
})
export class StorelandingpageModule { }
