import { useCartStore } from "../stores/cartStore.ts";
import { CartProduct } from "../interfaces/CartProduct.ts";

function Cart() {
  const products = useCartStore((state) => state.products);
  const decProducts = useCartStore((state) => state.decProduct);
  const checkout = useCartStore((state) => state.checkout);
  function handleDec(id: number) {
    decProducts(id);
  }
  function handleCheckout() {
    checkout();
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full min-h-32 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-50">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-600">
          <tr>
            <th>name</th>
            <th>price per 1</th>
            <th>count</th>
            <th>total price</th>
            <th></th>
          </tr>
        </thead>
        <tbody
          className={
            "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          }
        >
          {products.map((product: CartProduct) => (
            <tr>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              <td>{(product.price * product.count).toFixed(2)}</td>
              <td>
                <button onClick={() => handleDec(product.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mx-4">
        <h2>
          total cost: $
          {products
            .reduce((acc, cur) => acc + cur.price * cur.count, 0)
            .toFixed(2)}
        </h2>
        <button onClick={() => handleCheckout()}>checkout</button>
      </div>
    </div>
  );
}

export default Cart;
