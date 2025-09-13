import { Component } from '@angular/core';
import { BestSellers } from '../../public-shared/interface/public.interfaces';
import { ProductCard } from "./product-card/product-card";

@Component({
  selector: 'app-best-seller',
  imports: [ProductCard],
  templateUrl: './best-seller.html',
  styleUrl: './best-seller.scss'
})
export class BestSeller {
  bestSellers: BestSellers[] = [
    { imageUrl: '/assets/images/first.png', title: 'Roadstar', price: '$38.00', oldPrice: '$40.00', description: 'Printed cotton T-shirt' },
    { imageUrl: '/assets/images/beast-2.jpeg', title: 'Allen Solly', price: '$80.00', oldPrice: '$100.00', description: 'Woman Textured Handheld Bag' },
    { imageUrl: '/assets/images/best-3.jpg', title: 'Louis Philippe Sport', price: '$50.00', oldPrice: '$55.00', description: 'Polo Collar T-shirt' },
    { imageUrl: '/assets/images/best-4.avif', title: 'Adidas', price: '$60.00', oldPrice: '$75.00', description: 'Men adi-dash Running Shoes' },
    { imageUrl: '/assets/images/best-1.png', title: 'Trendyol', price: '$35.00', oldPrice: '$45.00', description: 'Floral Embroidered maxi dress' },
    { imageUrl: '/assets/images/beast-6.jpg', title: 'TK Disney', price: '$80.00', oldPrice: '$100.00', description: 'Girls Pink Moana Printed Dress ' },
    { imageUrl: '/assets/images/beast-7.jpeg', title: 'US Polo', price: '$40.00', oldPrice: '$50.00', description: 'Tailored  Cotton Casual Shirt' },
    { imageUrl: '/assets/images/beast-8.jpg', title: 'Zyla', price: '$35.00', oldPrice: '$40.00', description: 'Woman Sandals' },
  ]
}
