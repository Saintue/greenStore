import { useProductStore } from "../stores/productStore.ts";
import { useEffect } from "react";
import Cart from "../components/Cart.tsx";

function CalculatorPage() {
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
    <div className="w-full h-full bg-[url(./assets/6.png)] bg-no-repeat bg-cover justify-center flex">
      <Cart></Cart>
    </div>
  );
}
export default CalculatorPage;
