import {Component} from "@angular/core";
import {Product} from "../product.model"
import { ShoeService } from "../shoe.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent {
  product?: Product;
  error = false;
  constructor(
    private shoeService : ShoeService) {}

  ngOnInit():void {
   // this.getProducts();
  }

//   getProducts(): void {
//     this.shoeService.getProducts().subscribe(response => this.products = response.products);
//   }
 }
