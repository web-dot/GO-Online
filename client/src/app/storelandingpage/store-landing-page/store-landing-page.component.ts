import { Component, OnInit } from '@angular/core';
import { StoreDetails } from 'src/app/domains/StoreDetails';
import { ActivatedRoute } from '@angular/router';
import { StorelandingpageService } from '../storelandingpage.service';
import { MatDialog } from '@angular/material/dialog';
import { StoreFormComponent } from 'src/app/products/new-store-dialog/store-form/store-form.component';
import { Router } from '@angular/router';
import { User } from 'src/app/domains/User';

@Component({
  selector: 'app-store-landing-page',
  templateUrl: './store-landing-page.component.html',
  styleUrls: ['./store-landing-page.component.css']
})
export class StoreLandingPageComponent implements OnInit {

  user: User;
  storeCreated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private storeService: StorelandingpageService,
    private dialog: MatDialog,
    private router: Router
    ) { }

  storeDetails: StoreDetails = new StoreDetails();

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const userJson = params.get("userJson");
      if(userJson){
        this.user = JSON.parse(userJson);
      }
    })
    // const userJson = this.route.snapshot.queryParams["userJson"];
    // this.user = JSON.parse(userJson);
    this.storeCreated = this.user.storeOwner;
    //this.saveStoreData();
  }


  saveStoreData(){
    this.storeService.saveStoreData(this.storeDetails).subscribe(data => {
      console.log(data);
    });
  }

  newShopDialog(){
    const dialogRef = this.dialog.open(StoreFormComponent, {
      disableClose: false,
      autoFocus: true,
      hasBackdrop: true,
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result.productCategory !== null || result.shopName !== null){
        this.storeDetails.userId = this.user.userId;
        this.storeDetails.shopName = result.shopName;
        this.storeDetails.summary = result.summary;
        this.storeCreated = true;
      }
      this.storeService.saveStoreData(this.storeDetails).subscribe(response =>{
        console.log(response);
      })
    });
  }




}
