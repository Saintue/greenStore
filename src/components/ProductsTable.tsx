import { Product } from "../interfaces/Product.ts";
import { useCartStore } from "../stores/cartStore.ts";

function ProductsTable({ products }: { products: Product[] }) {
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto mb-5 h-[600px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          className={
            "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          }
        >
          {products.map((product: Product) => (
            <tr className="px-6 py-3 h-14">
              <td>
                <div className="px-5 py-3">{product.title}</div>
              </td>
              <td>
                <div className="px-5 py-3">{product.category}</div>
              </td>
              <td>
                <div className="px-5 py-3">{product.price}$</div>
              </td>
              <td>
                <div className="px-5 py-3">{product.rating.rate}</div>
              </td>
              <td>
                <div className="mx-5 my-3 flex justify-center bg-gray-400">
                  <button onClick={() => handleAdd(product)}>+</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
