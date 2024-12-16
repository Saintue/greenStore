import { create } from "zustand";
import { ProductStore } from "../interfaces/ProductStore.ts";
import { Product } from "../interfaces/Product.ts";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  currentProduct: {
    id: 0,
    category: "",
    description: "",
    image: "",
    rating: { count: 0, rate: 0 },
    title: "",
    price: 0,
  },
  settings: {},
  isLoading: true,
  errors: [],
  fetchProducts: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      set({ products: json, isLoading: false });
    } catch {
      set({ errors: ["fetch error"], isLoading: false });
    }
  },
  setProducts: (newProducts: Product[]) => {
    set({ products: [...newProducts, ...newProducts] });
  },
  fetchOneProduct: async (id: number) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await res.json();
      console.log(json);
      set({ currentProduct: json, isLoading: false });
    } catch {
      set({ errors: ["fetch error"], isLoading: false });
    }
  },
}));
