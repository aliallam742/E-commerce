import { BestSeller } from './../../home/best-seller/best-seller';
export interface CategoriesList {
    name: string;
    imageUrl: string;
}

export interface BestSellers {
    imageUrl: string;
    title: string;
    price: string;
    oldPrice: string;
    description: string;
}