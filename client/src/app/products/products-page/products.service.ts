import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from 'src/app/domains/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  baseUrl : string = "http://localhost:8080" 

  constructor(private http : HttpClient) { }


  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    //observe?: 'body' | 'events' | 'response',
    //params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    //reportProgress?: boolean,
    responseType?: 'json';
    //withCredentials?: boolean,
  }

  saveProduct(product: Product): Observable<any>{
    return this.http.post(this.baseUrl + "/api/saveProduct", product, this.options);
  }

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseUrl + "/api/getAllProducts", this.options);
  }

  sendToken(token: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': token
    });
    return this.http.post(this.baseUrl + "/api/tokensignin", {}, {headers});
  }

  updateProduct(product: Product): Observable<any>{
    return this.http.post(this.baseUrl + "/api/updateProduct", product, this.options);
  }

}
