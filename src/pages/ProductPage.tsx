import { useParams } from "react-router-dom";
import { useProductStore } from "../stores/productStore.ts";
import { useEffect } from "react";
import top from "../assets/10top.png"
import bot from "../assets/10bot.png"
import {useCartStore} from "../stores/cartStore.ts";
import {Product} from "../interfaces/Product.ts";

function ProductPage() {
  const { id } = useParams();
  const addProduct = useCartStore((state) => state.setProduct);
  const getOneProduct = useProductStore((state) => state.fetchOneProduct);
  const isLoading = useProductStore((state) => state.isLoading);
  const errors = useProductStore((state) => state.errors);
  const product = useProductStore((state) => state.currentProduct);
  useEffect(() => {
    getOneProduct(parseInt(id!));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (errors.length > 0) {
    return <div>{errors[0]}</div>;
  }
  function handleAdd(product: Product) {
    addProduct({
      price: product.price,
      title: product.title,
      id: product.id,
      count: 1,
    });
  }

  return (
    <div className="w-full h-full bg-white flex justify-center">
      <div className={"w-full h-full"}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative md:flex-1 bg-white h-full flex flex-col justify-between">
            <div className="rounded-lg">
              <img
                className="w-full object-fit"
                src={top}
                alt="Product Image"
              />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div className="rounded-lg flex justify-center max-h-[360px] max-w-[360px]">
                <img
                  className="p-10 object-fill "
                  src={product.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="rounded-lg">
              <img
                className="w-full object-fill"
                src={bot}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 md:border-l-2 border-[#C6C3AE] bg-[#EEECDE] p-6 relative">
            <div
              className={
                "md:absolute md:z-2 md:bg-contain md:h-full md:w-full md:bg-no-repeat md:bg-[url(./assets/12.png)] top-0 right-0 "
              }
            ></div>
            <div className="flex flex-col relative h-full md:justify-between">
              <h1 className="relative z-1 text-[clamp(0.875rem,3vw,2.8rem)] font-bold font-balsamiq text-center px-6">
                {product.title.trim().split(/\s+/).slice(0, 5).join(' ')}
              </h1>
              <p className="my-10 relative text-[clamp(0.875rem,2vw,1.8rem)] font-medium z-1 md:my-20 px-8 text-justify">
                {product.description}
              </p>

              <div className="justify-center relative flex">
                <p className="items-center flex text-[clamp(0.875rem,3vw,5rem)] mr-10 ml-2">
                  {product.price.toFixed(2)}$
                </p>
                <button onClick={() => handleAdd(product)} className="text-[24px] bg-[#54755A] p-4 rounded-3xl text-white md:text-[clamp(0.875rem,3vw,5rem)]">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
