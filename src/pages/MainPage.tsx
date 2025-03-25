import ProductCard from "../components/ProductCard.tsx";
import { useProductStore } from "../stores/productStore.ts";
import { useEffect } from "react";
import { Product } from "../interfaces/Product.ts";
function MainPage() {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const isLoading = useProductStore((state) => state.isLoading);
  const errors = useProductStore((state) => state.errors);
  const loadProducts = useProductStore((state) => state.setProducts);
  useEffect(() => {
    fetchProducts();
    console.log(errors);
  }, []);
  function handleClick(moreProducts: Product[]) {
    loadProducts(moreProducts);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (errors.length > 0) {
    return <div>{errors[0]}</div>;
  }
  return (
      <div className="w-full h-full bg-[url(./assets/6.png)] bg-no-repeat bg-cover justify-center flex">
          <div className="flex justify-between flex-col h-full w-full max-w-[1500px]">
      <div className="flex flex-row items-center justify-center w-full flex-wrap">
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
      </div>
      </div>
  );
}
export default MainPage;
