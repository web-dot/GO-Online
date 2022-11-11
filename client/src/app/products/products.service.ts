import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl : string = "http://localhost:8080" 

  constructor(private http : HttpClient) { }


  getAllProducts(): Observable<Object>{
    return this.http.get(this.baseUrl + "/api/getAllProducts");
  }

}
