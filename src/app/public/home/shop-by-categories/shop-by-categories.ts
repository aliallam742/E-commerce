import { Component } from '@angular/core';
import { CategoryCard } from "./category-card/category-card";
import { CategoriesList } from '../../public-shared/interface/public.interfaces';

@Component({
  selector: 'app-shop-by-categories',
  imports: [CategoryCard],
  templateUrl: './shop-by-categories.html',
  styleUrl: './shop-by-categories.scss'
})
export class ShopByCategories {
  readonly categoriesList: Array<CategoriesList> = [
    { imageUrl: 'assets/images/casual_wear.png', name: 'Casual Wear' },
    { imageUrl: 'assets/images/western_wear.png', name: 'Western Wear' },
    { imageUrl: 'assets/images/ethnic_wear.png', name: 'Ethnic Wear' },
    { imageUrl: 'assets/images/kids_wear.png', name: 'Kids Wear' }
  ];
}
