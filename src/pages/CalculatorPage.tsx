import ProductsTable from "../components/ProductsTable.tsx";
import { useProductStore } from "../stores/productStore.ts";
import { useEffect } from "react";
import Cart from "../components/Cart.tsx";

function CalculatorPage() {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const isLoading = useProductStore((state) => state.isLoading);
  const errors = useProductStore((state) => state.errors);
  useEffect(() => {
    fetchProducts();
    console.log(errors);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (errors.length > 0) {
    return <div>{errors[0]}</div>;
  }
  return (
    <div className="w-full max-w-[1000px]">
      <ProductsTable products={products}></ProductsTable>
      <h1 className="ml-5">Cart</h1>
      <Cart></Cart>
    </div>
  );
}
export default CalculatorPage;
