import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class TalkWithDbService {
  myBaseServerUrl = environment.serverUrl;

  constructor(public httpClient: HttpClient) {}

  filterProduct(obj) {
    var url = this.myBaseServerUrl + 'api/products';
    return this.httpClient.post(url, obj);
  }
  filterPage(obj) {
    var url = this.myBaseServerUrl + 'api/page';
    return this.httpClient.post(url, obj);
  }
  filterCart(obj) {
    var url = this.myBaseServerUrl + 'api/cart';
    return this.httpClient.post(url, obj);
  }
}
