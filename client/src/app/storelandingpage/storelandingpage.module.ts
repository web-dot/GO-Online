import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorelandingpageRoutingModule } from './storelandingpage-routing.module';
import { StoreLandingPageComponent } from './store-landing-page/store-landing-page.component';


@NgModule({
  declarations: [
    StoreLandingPageComponent
  ],
  imports: [
    CommonModule,
    StorelandingpageRoutingModule
  ]
})
export class StorelandingpageModule { }
