import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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
//   getSingleProduct(){
// const url= '$(this.shoesUrl}/${id}';
// return this.http.get<ProductsResponse>(url).pipe(
//   map((response)=>response.products
//   .find((product)=>product.id===id))
// )
//   }
}
