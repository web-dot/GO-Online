import { Component, OnInit } from '@angular/core';
import { StoreDetails } from 'src/app/domains/StoreDetails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-landing-page',
  templateUrl: './store-landing-page.component.html',
  styleUrls: ['./store-landing-page.component.css']
})
export class StoreLandingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  storeDetails: StoreDetails = new StoreDetails();

  ngOnInit(): void {
    this.storeDetails.shopName = this.route.snapshot.queryParams["shopName"];
    this.storeDetails.productCategory = this.route.snapshot.queryParams["productCategory"];
    this.storeDetails.firstName = this.route.snapshot.queryParams["firstName"];
    this.storeDetails.lastName = this.route.snapshot.queryParams["lastName"];
    this.storeDetails.openTime = this.route.snapshot.queryParams["openTime"];
    this.storeDetails.closeTime = this.route.snapshot.queryParams["closeTime"];
    console.log(this.storeDetails);
  }




}
