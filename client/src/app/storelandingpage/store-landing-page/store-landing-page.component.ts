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

  storeDetails: StoreDetails;
  firstName: string;

  ngOnInit(): void {
    this.firstName = this.route.snapshot.queryParams[this.storeDetails.firstName]
    console.log(this.firstName);
  }

}
