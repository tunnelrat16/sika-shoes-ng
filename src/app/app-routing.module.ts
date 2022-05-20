import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{
  path: "home",
component: HomePageComponent,
},{
  path: '', redirectTo: '/home', pathMatch: 'full'
},{
  path: "products",
  component: ProductsPageComponent,
}, {
  path: "product",
  component: ProductPageComponent,
}, {
  path: "about",
  component: AboutPageComponent,
},{
 path: "productListing",
 component: ProductListingComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
