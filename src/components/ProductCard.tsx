import {Product} from "../interfaces/Product.ts";

function ProductCard({product}: {product: Product}) {
    return(<div className="bg-red-600 h-80 w-1/4 mb-5 ml-3">
        {product.id}
    </div>)
}
export default ProductCard