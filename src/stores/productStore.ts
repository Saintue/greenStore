import {create} from "zustand";
import {ProductStore} from "../interfaces/ProductStore.ts";
import {Product} from "../interfaces/Product.ts";

export const useProductStore = create<ProductStore>((set)=>({
    products: [],
    currentProduct: null,
    settings: {},
    isLoading: true,
    errors: [],
    fetchProducts: async ()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const json = await res.json()
        set({products:json, isLoading:false})
    },
    setProducts: (newProducts: Product[])=>{
        set({products:[...newProducts,...newProducts]})
    }
}))