import { Component, Input } from '@angular/core';
import { BestSellers } from '../../../public-shared/interface/public.interfaces';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product?: BestSellers;
}
