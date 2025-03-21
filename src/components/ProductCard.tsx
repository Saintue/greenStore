import { Product } from "../interfaces/Product.ts";
import { NavLink } from "react-router-dom";
import {useCartStore} from "../stores/cartStore.ts";

function ProductCard({ product }: { product: Product }) {
  const addProduct = useCartStore((state) => state.setProduct);
  function handleAdd(product: Product) {
    addProduct({
      price: product.price,
      title: product.title,
      id: product.id,
      count: 1,
    });
  }
  return (
    <div
      className={
        "h-[278px] w-[254px] bg-white rounded-3xl border-2 border-[#C1BEA8] justify-between flex-col flex mx-5 my-2"
      }
    >
      <div className={"w-[120px] h-[120px] mx-auto items-center flex my-4"}>
        <img src={product.image} alt="product" className={"w-full h-full"} />
      </div>
      <div className={"flex-1"}>
        <div className="flex justify-center">
          <NavLink
            to={`/shopCalculator/products/${product.id}`}
            className={"mx-4 flex h-full text-center"}
          >
            {product.title.substring(0, 40) + "..."}
          </NavLink>
        </div>
      </div>
      <div>
        <div
          className={
            "h-16 rounded-b-[21px] w-full bg-[#ABB4A2]  items-center flex justify-between px-2"
          }
        >
          <h5 className={"pl-2 flex justify-center flex-col"}>
            {product.price}$
          </h5>
          <button onClick={() => handleAdd(product)}
            className={"bg-[#54755A] rounded-[30px] h-12 px-2 text-white"}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
