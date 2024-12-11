import {Product} from "../interfaces/Product.ts";
import {NavLink} from "react-router-dom";

function ProductCard({product}: {product: Product}) {
    console.log(product)
    return(<div className="flex flex-col justify-between bg-red-600 h-80 w-96 mb-5 ml-3">
        <div>
        <h2>{product.title}</h2>
        <p>{product.price}$</p>
        </div>
        <div className="h-3/4 flex justify-center">
        <img src={product.image} alt="Product Image" className=" h-40 w-40 object-fill" />
        </div>
        <NavLink to={`/products/${product.id}`}>learn more</NavLink>
    </div>)
}
export default ProductCard