import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from "./app.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {AboutPageComponent} from "./about-page/about-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductsPageComponent} from "./products-page/products-page.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ProductListingComponent} from "./product-listing/product-listing.component";
import { AppRoutingModule } from './app-routing.module';

const Routes: Routes = [{
  path: "home",
component: HomePageComponent,
},
{ path: '', redirectTo: '/home', pathMatch: 'full' },{
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
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    NavBarComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes, { enableTracing: true}),
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
