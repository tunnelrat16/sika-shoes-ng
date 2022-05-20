import {Component, OnInit} from "@angular/core";
import { ShoeService } from "../shoe.service";
import {Product} from "../product.model"

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = []
  error = false
  constructor(
    private shoeService : ShoeService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.shoeService.getProducts().subscribe(response => this.products = response.products);
  }
}

