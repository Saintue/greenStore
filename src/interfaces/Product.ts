import {Rating} from "./Rating.ts";

export interface Product {
    id: number;
    category: string;
    description: string;
    image: string;
    rating: Rating;
    title: string;
    price: number;
}