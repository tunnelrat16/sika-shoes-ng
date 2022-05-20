import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: " ",
  component: AppComponent,
}, {
  path: "products",
  component: ProductsPageComponent,
}, {
  path: "product",
  component: ProductPageComponent,
}, {
  path: "about",
  component: ProductListingComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
