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
            <div className="flex flex-col relative h-full">
              <h1 className="relative z-1 md:text-3xl lg:text-5xl font-bold text-gray-800 mb-2">
                {product.title}
              </h1>
              <p className="relative text-gray-600 dark:text-gray-300 md:text-2xl lg:text-4xl z-1 mb-4">
                {product.description}
              </p>

              <div className="relative flex justify-center">
                <p className="items-center flex md:text-3xl mr-6 lg:text-4xl 2xl:text-6xl">
                  {product.price}$
                </p>
                <button onClick={() => handleAdd(product)} className="bg-[#54755A] p-4 rounded-3xl  md:text-3xl text-white lg:text-4xl 2xl:text-6xl">
                  add to cart
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
