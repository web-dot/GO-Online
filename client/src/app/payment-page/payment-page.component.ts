import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  totalAmount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
