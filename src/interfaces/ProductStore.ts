import {Product} from "./Product.ts";

export interface ProductStore {
    products: Product[],
    currentProduct: Product,
    isLoading: boolean,
    errors: string[],
    fetchProducts: ()=>void,
    setProducts: (newProduct:Product[])=>void,
    fetchOneProduct: (id:number) => void,
}