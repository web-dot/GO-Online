import { Component, OnInit } from '@angular/core';
import { StoreDetails } from 'src/app/domains/StoreDetails';
import { ActivatedRoute } from '@angular/router';
import { StorelandingpageService } from '../storelandingpage.service';

@Component({
  selector: 'app-store-landing-page',
  templateUrl: './store-landing-page.component.html',
  styleUrls: ['./store-landing-page.component.css']
})
export class StoreLandingPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private storeService: StorelandingpageService
    ) { }

  storeDetails: StoreDetails = new StoreDetails();

  ngOnInit(): void {
    this.storeDetails.shopName = this.route.snapshot.queryParams["shopName"];
    this.storeDetails.productCategory = this.route.snapshot.queryParams["productCategory"];
    this.storeDetails.firstName = this.route.snapshot.queryParams["firstName"];
    this.storeDetails.lastName = this.route.snapshot.queryParams["lastName"];
    this.storeDetails.openTime = this.route.snapshot.queryParams["openTime"];
    this.storeDetails.closeTime = this.route.snapshot.queryParams["closeTime"];
    console.log(this.storeDetails);
    this.saveStoreData();
  }


  saveStoreData(){
    this.storeService.saveStoreData(this.storeDetails).subscribe(data => {
      console.log(data);
    });
  }




}
