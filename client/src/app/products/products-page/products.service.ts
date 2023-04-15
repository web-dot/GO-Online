import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseUrl + "/api/getAllProducts", this.options);
  }

}
