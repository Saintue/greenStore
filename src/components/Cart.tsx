import { useCartStore } from "../stores/cartStore.ts";
import { CartProduct } from "../interfaces/CartProduct.ts";

function Cart() {
  const products = useCartStore((state) => state.products);
  const checkout = useCartStore((state) => state.checkout);


  function handleCheckout() {
    checkout();
  }

  return (
    <div className="relative  min-h-32 sm:rounded-lg my-5 mx-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white text-center uppercase bg-[#54755A]">
          <tr>
            <th className="border-r-2 border-b-[6px] border-[#C6C3AE] md:w-60 rounded-tl-2xl">Product Name</th>
            <th className="border-r-2 border-b-[6px] border-[#C6C3AE] md:w-36">
              price
            </th>
            <th className="border-r-2 border-b-[6px] border-[#C6C3AE] md:w-36 h-10 p-2">
              count
            </th>
            <th className="border-b-[6px] border-[#C6C3AE] md:w-36 rounded-tr-2xl">total price</th>
          </tr>
        </thead>
        <tbody className={"text-xs text-gray-700 uppercase"}>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="bg-white border-[#C6C3AE] text-center rounded-bl-2xl relative h-20"
              >
                cart is empty
              </td>
              <td className="bg-white border-[#C6C3AE] border-2 text-center w-48">0</td>
            </tr>
          ) : (
            products.map((product: CartProduct, index: number) => (
              <tr className="text-center">
                <td className={`h-20 bg-white border-2 border-[#C6C3AE] p-2`}>
                  {product.title}
                </td>
                <td className="bg-white border-2 border-[#C6C3AE] p-2">
                  {product.price}
                </td>
                <td className="bg-white border-2 border-[#C6C3AE] p-2">
                  {product.count}
                </td>
                {index == 0 ? (
                    <td
                    rowSpan={products.length}
                    className="bg-white border-2 border-[#C6C3AE] w-2 p-2"
                  >
                    {index == 0
                      ? products
                          .reduce((acc, cur) => acc + cur.price * cur.count, 0)
                          .toFixed(2)
                      : ""}
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))
          )}
          {products.length === 0 ? (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="bg-[#C6C3AE] rounded-b-2xl text-center h-8">
                <div className="flex items-center justify-center">
                  <h2 className="pl-2">checkout:</h2>
                  <button onClick={() => handleCheckout()} className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3}></td>
              <td className="bg-[#C6C3AE] rounded-b-2xl text-center h-8">
                <div className="flex items-center justify-center">
                  <h2 className="pl-2">checkout:</h2>
                  <button onClick={() => handleCheckout()} className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
