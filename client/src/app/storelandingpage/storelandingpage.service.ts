import { Injectable } from '@angular/core';
import { StoreDetails } from '../domains/StoreDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StorelandingpageService {

  baseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  options:{
    headers?:HttpHeaders | {[header : string]: string | string[]};
    responseType?: 'json'; 
  }

  saveStoreData(storeData: StoreDetails): Observable<Object>{
    return this.http.post(this.baseUrl + "/api/saveNewStore", storeData, this.options);
  }

}
