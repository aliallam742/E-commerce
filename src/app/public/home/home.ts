import { Component } from '@angular/core';
import { ShopByCategories } from "./shop-by-categories/shop-by-categories";
import { Banner } from "./banner/banner";

@Component({
  selector: 'app-home',
  imports: [ShopByCategories, Banner],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
