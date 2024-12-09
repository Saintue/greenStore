import {Product} from "./Product.ts";

export interface ProductStore {
    products: Product[],
    currentProduct: null,
    isLoading: boolean,
    errors: string[],
    fetchProducts: ()=>void,
    setProducts: (newProduct:Product[])=>void,
}