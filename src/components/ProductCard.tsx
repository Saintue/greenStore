import { Product } from "../interfaces/Product.ts";
import { NavLink } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="max-w-sm h-96 mx-1 mb-1 overflow-x-hidden bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-20 my-4 mx-4 h-20 rounded-t-lg object-fill"
        src={product.image}
        alt="product image"
      />
      <div className="h-[260px] p-5 flex flex-col justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description.substring(0, 120) + "..."}
        </p>
        <NavLink
          to={`products/${product.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductCard;
