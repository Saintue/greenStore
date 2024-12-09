import ProductCard from "../components/ProductCard.tsx";
import { useProductStore } from "../stores/productStore.ts";
import { useEffect } from "react";
import {Product} from "../interfaces/Product.ts";
function MainPage() {
  const products = useProductStore((state ) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const isLoading = useProductStore((state) => state.isLoading);
  const loadProducts = useProductStore((state) => state.setProducts);
  useEffect(() => {
    console.log(isLoading);
    fetchProducts();
  }, []);
  function handleClick(moreProducts:Product[]) {
      console.log("joasd");
      loadProducts(moreProducts)
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center w-full flex-wrap">
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
      <button onClick={()=>handleClick(products)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-full mt-5">
        Load More...
      </button>
    </div>
  );
}
export default MainPage;
