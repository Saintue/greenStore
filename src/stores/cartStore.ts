import { create } from "zustand";
import { CartStore } from "../interfaces/CartStore.ts";

export const useCartStore = create<CartStore>((set, get) => ({
  products: [],
  settings: {},
  isLoading: true,
  errors: [],
  setProduct: (product) => {
    const find = get().products.findIndex((el) => {
      return el.id === product.id;
    });
    if (find === -1) {
      set((state) => ({ products: [...state.products, product] }));
    } else {
      const updatedArray = get().products.map((element, index) => {
        if (index === find) {
          element.count += 1;
        }
        return element;
      });
      set(() => ({ products: [...updatedArray] }));
    }
  },
  decProduct: (id: number) => {
    const find = get().products.findIndex((el) => {
      return el.id === id;
    });
    if (find !== -1) {
      let updatedArray = get().products.map((element, index) => {
        if (index === find) {
          element.count -= 1;
        }
        return element;
      });
      updatedArray = updatedArray.filter((el) => el.count !== 0);
      set(() => ({ products: [...updatedArray] }));
    }
  },
  checkout: () => {
    set({ products: [] });
  },
}));
