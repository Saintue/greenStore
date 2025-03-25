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
        "h-[371px] w-[312px] bg-white rounded-3xl border-2 border-[#C1BEA8] justify-between flex-col flex mt-8 mx-4"
      }
    >
      <div className={"w-[150px] h-[150px] mx-auto items-center flex my-4"}>
        <img src={product.image} alt="product" className={"w-full h-full"} />
      </div>
      <div>
        <div className="flex justify-center">
          <NavLink
            to={`/greenStore/products/${product.id}`}
            className={"mx-4 flex h-full text-center font-balsamic font-semibold text-[30px]"}
          >
            {product.title.trim().split(/\s+/).slice(0, 3).join(' ')+"..."}
          </NavLink>
        </div>
      </div>
      <div>
        <div
          className={
            "h-[86px] rounded-b-[21px] w-full bg-[#ABB4A2]  items-center flex justify-between px-2"
          }
        >
          <h5 className={"pl-2 flex justify-center flex-col font-medium text-[21px]"}>
            {product.price.toFixed(2)}$
          </h5>
          <button onClick={() => handleAdd(product)}
            className={"bg-[#54755A] rounded-[30px] h-12 px-2 text-white font-medium text-[19px]"}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
