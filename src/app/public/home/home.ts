import { Component } from '@angular/core';

import { ShopByCategories } from "./shop-by-categories/shop-by-categories";
import { Banner } from "./banner/banner";
import { BestSeller } from "./best-seller/best-seller";
import { MonthDeals } from "./month-deals/month-deals";
import { CustomerCommentList } from "./customer-comment-list/customer-comment-list";

@Component({
  selector: 'app-home',
  imports: [ShopByCategories, Banner, BestSeller, MonthDeals, CustomerCommentList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
