import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

type ProductsResponse = {
  products: Product[];
};

@Injectable({ providedIn: 'root' })
export class ShoeService {
  shoesUrl: string = './assets/products.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    this.getProducts().subscribe((data) => {
      console.log(data);
    });
  }

  getProducts() {
    return this.http.get<ProductsResponse>(this.shoesUrl);
  }
}
