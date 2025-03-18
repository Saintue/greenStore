import { CartProduct } from "./CartProduct.ts";

export interface CartStore {
  products: CartProduct[];
  isLoading: boolean;
  errors: string[];
  setProduct: (newProduct: CartProduct) => void;
  decProduct: (id: number) => void;
  checkout: () => void;
}
