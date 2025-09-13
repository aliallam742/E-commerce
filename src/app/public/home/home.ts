import { Component } from '@angular/core';
import { ShopByCategories } from "./shop-by-categories/shop-by-categories";
import { Banner } from "./banner/banner";
import { BestSeller } from "./best-seller/best-seller";

@Component({
  selector: 'app-home',
  imports: [ShopByCategories, Banner, BestSeller],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
